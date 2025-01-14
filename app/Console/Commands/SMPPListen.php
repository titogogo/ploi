<?php

namespace App\Console\Commands;

use App\Services\SmppService;
use Illuminate\Console\Command;

class SMPPListen extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:smpp-listen';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Run SMPP listener';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        try {
            $service = new SmppService();

            $service->listen();
        } catch (\Exception $exception) {
            var_dump($exception->getMessage());
        }
    }
}
