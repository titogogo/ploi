<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserEnabledMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        abort_unless($request->user()->enabled || $request->user()->admin, 403);

        return $next($request);
    }
}
