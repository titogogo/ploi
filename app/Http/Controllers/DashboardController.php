<?php

namespace App\Http\Controllers;

use App\Enums\TransactionType;
use App\Models\PaymentLog;
use App\Models\Transaction;
use App\Models\User;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        $totalSales = money(Transaction::where('type', TransactionType::EXTERNAL)->sum('amount')  * 100)->format();
        $todaySales = money(
            Transaction::where('type', TransactionType::EXTERNAL)
                ->whereDay('created_at', today())
                ->sum('amount') * 100
        )->format();
        $usersCount = User::where('admin', 0)->count();
        $newUsers = User::where('admin', 0)
            ->whereDate('created_at', today())
            ->count();

        return Inertia::render('Dashboard', compact('totalSales', 'todaySales', 'usersCount', 'newUsers'));
    }
}
