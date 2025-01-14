<?php

namespace App\Actions;

use App\Models\Gateway;
use App\Models\Rate;
use App\Models\ScheduledMessage;
use App\Models\ScheduledMessageRecipient;
use App\Services\CountriesService;
use Cknow\Money\Money;
use Illuminate\Support\Arr;
use libphonenumber\PhoneNumberToCarrierMapper;
use Propaganistas\LaravelPhone\PhoneNumber;

class CalculateMessagePrice
{
    public static function execute(
        ScheduledMessage $message,
        Gateway $gateway,
        ScheduledMessageRecipient $recipient,
    ): Money
    {
        if ($gateway->cost) {
            return $gateway->cost;
        }

        $phone = new PhoneNumber($recipient->phone);

        $carrierMapper = PhoneNumberToCarrierMapper::getInstance();

        $countries = collect(CountriesService::getCountries());
        $country = $countries->get($phone->getCountry());
        $carriers = collect(Arr::get($country, 'carriers', []));
        $carrier = collect($carriers->where('name', $carrierMapper->getNameForValidNumber($phone->toLibPhoneObject(), "en"))->first() ?? []);
        $countryName = Arr::get($country, 'name', '');

        $rate = Rate::where('country_name', $countryName)
            ->where('operator_prefix', $carrier->get('code'))
            ->latest()
            ->first();

        return money($rate->rate);
    }
}
