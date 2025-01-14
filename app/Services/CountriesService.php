<?php

namespace App\Services;

use Giggsey\Locale\Locale;
use libphonenumber\PhoneNumberToCarrierMapper;
use libphonenumber\prefixmapper\PhonePrefixMap;
use libphonenumber\prefixmapper\PrefixFileReader;
use ReflectionClass;
use ReflectionProperty;

class CountriesService
{
    public static function getCountries(): array
    {
        $directory =  '/carrier/data';
        $baseLocation = dirname((new ReflectionClass(PhoneNumberToCarrierMapper::class))->getFileName());

        $prefixFileReader = new PrefixFileReader($baseLocation . DIRECTORY_SEPARATOR . $directory);


        $countries = collect(Locale::getAllCountriesForLocale('en'))->map(function ($name, $key) use ($prefixFileReader) {
            $code = \libphonenumber\PhoneNumberUtil::getInstance()->getCountryCodeForRegion($key);

            $result = $prefixFileReader->getPhonePrefixDescriptions($code, 'en', null, 'US');

            if ($result == null) {
                return [];
            }

            $property = new ReflectionProperty(PhonePrefixMap::class, 'phonePrefixMapStorage');
//            $property->setAccessible(true);

            $carriers = collect($property->getValue($result))->map(function ($carrier, $key) {
                return [
                    'code' => $key,
                    'name' => $carrier,
                ];
            });

            return [
                'key' => $key,
                'name' => $name,
                'carriers' => $carriers,
            ];
        })->filter();

        return $countries->toArray();
    }
}
