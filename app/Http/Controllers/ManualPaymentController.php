<?php

namespace App\Http\Controllers;

use App\Enums\ManualPaymentStatus;
use App\Enums\PaymentMethod;
use App\Http\Requests\CreateManualPaymentRequest;
use App\Models\Gateway;
use App\Models\ManualPayment;
use Illuminate\Http\Request;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class ManualPaymentController extends Controller
{
    public function index(Request $request)
    {
        abort_unless(auth()->user()->admin, 403);

        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('method', 'LIKE', "%{$value}%")
                        ->orWhere('email', 'LIKE', "%{$value}%")
                        ->orWhere('transaction_id', 'LIKE', "%{$value}%")
                        ->orWhere('amount', 'LIKE', "%{$value}%")
                        ->orWhere('status', 'LIKE', "%{$value}%");
                });
            });
        });

        $manualPayments = QueryBuilder::for(ManualPayment::class)
            ->allowedFilters([$globalSearch])
            ->defaultSort('-id')
            ->allowedSorts([
                'method',
                'email',
                'transaction_id',
                'amount',
                'status',
                'user_id',
                'created_at',
                AllowedSort::field('user', 'user_id'),
            ])
            ->with('user')
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('ManualPayment/Index', compact('manualPayments'));
    }

    public function show(ManualPayment $payment)
    {
        abort_unless(auth()->user()->admin, 403);

        $payment->load('user');

        return Inertia::render('ManualPayment/Show', compact('payment'));
    }

    public function create(
        PaymentMethod $method,
    )
    {
        abort_unless(in_array($method, [PaymentMethod::SKRILL, PaymentMethod::REVULOT]), 403);

        return Inertia::render('ManualPayment/Create', compact('method'));
    }

    public function store(
        CreateManualPaymentRequest $request,
        PaymentMethod              $method,
    )
    {
        abort_unless(in_array($method, [PaymentMethod::SKRILL, PaymentMethod::REVULOT]), 403);

        $files = [];

        /**
         * @var $file UploadedFile
         */
        foreach ($request->allFiles()['files'] as $file) {
            $fileName = auth()->id() . '-' . Str::random() . '-' . $file->getClientOriginalName();
            $files[] = $file->storePubliclyAs('proof_files', $fileName, ['disk' => 'public']);
        }

        $amount = money($request->integer('amount') * 100);

        ManualPayment::create([
            'method' => $method,
            'email' => $request->string('email')->toString(),
            'transaction_id' => $request->string('transaction_id')->toString(),
            'amount' => $amount,
            'user_id' => auth()->id(),
            'files' => $files,
            'status' => ManualPaymentStatus::PENDING,
        ]);

        return back();
    }

}
