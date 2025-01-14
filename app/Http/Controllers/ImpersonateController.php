<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Auth;

class ImpersonateController extends Controller
{
    public function impersonate(User $user)
    {
        Auth::user()->impersonate($user);

        return to_route('dashboard');
    }

    public function leaveImpersonation()
    {
        Auth::user()->leaveImpersonation();

        return to_route('users.index');
    }
}
