<?php

namespace App\Services;

use App\Enums\GatewayType;
use App\Models\Gateway;
use App\Models\SmppInfo;
use Illuminate\Database\Eloquent\Collection;
use PhpSmpp\Client;
use PhpSmpp\Service\Listener;
use PhpSmpp\Service\Sender;
use smpp\SMPP;

class SmppService
{
    protected array $services = [];

    private function getSmppGateways(): Collection
    {
        return Gateway::where('type', GatewayType::SMPP)
            ->where('enabled', true)
            ->with('info')
            ->get();
    }

    /**
     * @throws \Throwable
     */
    public static function send(Gateway $gateway, $phone, $msg, $sender): string
    {
        /** @var SmppInfo $info */
        $info = $gateway->info;

        $sender = $info->sender ?? $sender;

        return (new SmsBuilder($info->ip_address, $info->port, $info->username, $info->password, 10000))
            ->setSender($sender, SMPP::TON_ALPHANUMERIC)
            ->setRecipient($phone, SMPP::TON_INTERNATIONAL)
            ->sendMessage($msg);
    }

    public function listen(): void
    {
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();

        try {
            $this->getSmppGateways()->each(function (Gateway $gateway) use ($output) {
                /** @var SmppInfo $info */
                $info = $gateway->info;

                if ($info) {
                    $output->writeln("<info>Listening to {$info->ip_address}</info>");

                    $this->runListener($gateway);
                }
            });
        } catch (\Exception $exception) {

        }
    }

    private function runListener(Gateway $gateway): void
    {
        $output = new \Symfony\Component\Console\Output\ConsoleOutput();

        try {
            /** @var SmppInfo $info */
            $info = $gateway->info;

            $service = new Listener([$info->ip_address], $info->username, $info->password, Client::BIND_MODE_RECEIVER, config('smpp.debug'));
            $service->listen(function (\PhpSmpp\Pdu\Sm $sm) use ($output) {
                $output->writeln("<info>{$sm->msgId}</info>");

                if ($sm instanceof \PhpSmpp\Pdu\DeliverReceiptSm) {
                    $output->writeln("<info>{$sm->state}</info>");
                    var_dump($sm->state == \PhpSmpp\SMPP::STATE_DELIVERED);
                    // do some job with delivery receipt
                } else {
                    $output->writeln("<info>not receipt</info>");
                }
            });
        } catch (\Exception $exception) {
            $output->writeln("<error>{$exception->getMessage()}</error>");
        }
    }
}
