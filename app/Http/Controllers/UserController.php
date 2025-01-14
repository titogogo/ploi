<?php

namespace App\Http\Controllers;

use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class UserController extends Controller
{
    public function index(Request $request)
    {
        abort_unless(auth()->user()->admin, true);

        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('email', 'LIKE', "%{$value}%")
                        ->orWhere('active', 'LIKE', "%{$value}%");
                });
            });
        });

        $users = QueryBuilder::for(User::class)
            ->allowedFilters([$globalSearch])
            ->defaultSort('-id')
            ->allowedSorts([
                'name',
                'balance',
                'email',
                'active',
            ])
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Users/Index', compact('users'));
    }

    public function show(User $user)
    {
        abort_unless(auth()->user()->admin, true);

        $transactions = QueryBuilder::for(Transaction::where('user_id', $user->id))
            ->defaultSort('-id')
            ->paginate(5)
            ->appends(request()->query());

        return Inertia::render('Users/Show', compact('user', 'transactions'));
    }

    public function setStatus(
        Request $request,
        User    $user
    )
    {
        abort_unless(auth()->user()->admin, true);

        if ($request->exists('enabled')) {
            $user->enabled = $request->boolean('enabled');
        }

        if ($request->exists('api_enabled')) {
            $user->api_enabled = $request->boolean('api_enabled');
        }

        if ($user->isDirty()) {
            $user->save();
        }

        return redirect()->back();
    }
}
