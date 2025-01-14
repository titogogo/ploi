<?php

namespace App\Http\Controllers;

use App\Models\DisputeLogs;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class DisputeLogsController extends Controller
{
    public function index(Request $request)
    {
        abort_unless(auth()->user()->admin, true);

        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('transaction_id', 'LIKE', "%{$value}%")
                        ->orWhere('provider', 'LIKE', "%{$value}%");
                });
            });
        });

        $disputeLogs = QueryBuilder::for(DisputeLogs::class)
            ->allowedFilters([$globalSearch])
            ->allowedSorts([
                'name',
                'provider',
                'dispute_id',
                'transaction_id',
                'amount',
                'status',
                AllowedSort::field('user', 'user_id'),
            ])
            ->with('user')
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('DisputeLogs/Index', compact('disputeLogs'));
    }
}
