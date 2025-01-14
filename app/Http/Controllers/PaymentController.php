<?php

namespace App\Http\Controllers;

use App\Http\Requests\DestroyManyRequest;
use App\Models\PaymentLog;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class PaymentController extends Controller
{
    public function index(Request $request)
    {
        abort_unless(auth()->user()->admin, true);

        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('provider', 'LIKE', "%{$value}%")
                        ->orWhere('provider_id', 'LIKE', "%{$value}%")
                        ->orWhere('amount', 'LIKE', "%{$value}%")
                        ->orWhere('status', 'LIKE', "%{$value}%");
                });
            });
        });

        $paymentLogs = QueryBuilder::for(PaymentLog::class)
            ->allowedFilters([$globalSearch])
            ->allowedSorts([
                'provider',
                'provider_id',
                'amount',
                'status',
                AllowedSort::field('user', 'user_id'),
                AllowedSort::field('transaction_id', 'provider_id'),
            ])
            ->with('user')
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Payment/Index', compact('paymentLogs'));
    }

    public function success()
    {
        return Inertia::render('Payment/Success');
    }

    public function destroyMany(DestroyManyRequest $request)
    {
        PaymentLog::whereIn('id', $request->input('ids'))->delete();

        return back();
    }
}
