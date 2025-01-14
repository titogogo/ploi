<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class UserApiEnabledMiddleware
{
    public function handle(Request $request, Closure $next)
    {
        abort_unless($request->user()->api_enabled || $request->user()->admin, 500);

        return $next($request);
    }
}
