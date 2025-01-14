<?php

namespace App\Http\Controllers;

use App\Enums\AuthorizationType;
use App\Enums\ContentType;
use App\Enums\DelayType;
use App\Enums\EncodingType;
use App\Enums\GatewayParamType;
use App\Enums\GatewayType;
use App\Enums\MethodType;
use App\Http\Requests\CreateGatewayRequest;
use App\Http\Requests\UpdateGatewayRequest;
use App\Models\Gateway;
use App\Models\GatewayParam;
use App\Models\HttpInfo;
use App\Models\SmppInfo;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\AllowedSort;
use Spatie\QueryBuilder\QueryBuilder;

class GatewayController
{
    public function index(Request $request)
    {
        abort_unless(auth()->user()->admin, 403);

        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%")
                        ->orWhere('type', 'LIKE', "%{$value}%");
                });
            });
        });

        $gateways = QueryBuilder::for(Gateway::class)
            ->allowedFilters([$globalSearch])
            ->allowedSorts([
                'id',
                'name',
                'type',
                'limit',
                'status',
                AllowedSort::field('webhook_url', 'id'),
            ])
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Gateway/Index', compact('gateways'));
    }

    public function create()
    {
        abort_unless(auth()->user()->admin, 403);

        $methodTypes = MethodType::toArray();
        $contentTypes = ContentType::toArray();
        $encodingTypes = EncodingType::toArray();
        $authTypes = AuthorizationType::toArray();
        $delayTypes = DelayType::toArray();

        return Inertia::render('Gateway/Create',
            compact('methodTypes', 'contentTypes', 'encodingTypes', 'authTypes', 'delayTypes')
        );
    }

    public function store(CreateGatewayRequest $request)
    {
        abort_unless(auth()->user()->admin, 403);

        DB::transaction(function () use ($request) {
            $type = $request->enum('type', GatewayType::class);
            $gateway = Gateway::create([
                'name' => $request->string('name')->toString(),
                'type' => $type,
                'cost' => money($request->float('cost')),
                'limit' => $request->integer('limit'),
                'delay' => $request->integer('delay'),
                'delay_type' => $request->enum('delay_type', DelayType::class),
                'enabled' => $request->boolean('enabled'),
            ]);

            if ($type === GatewayType::HTTP) {
                $httpInfo = HttpInfo::create([
                    'base_url' => $request->string('base_url')->toString(),
                    'success_keyword' => $request->string('success_keyword')->toString(),
                    'json_message_key' => $request->string('json_message_key')->toString(),
                    'webhook_json_message_key' => $request->string('webhook_json_message_key')->toString(),
                    'webhook_json_status_key' => $request->string('webhook_json_status_key')->toString(),
                    'method_type' => $request->enum('method_type', MethodType::class),
                    'json_encoded' => $request->boolean('json_encoded'),
                    'content_type' => $request->enum('content_type', ContentType::class),
                    'accept' => $request->enum('content_type', ContentType::class),
                    'encoding' => $request->enum('encoding_type', EncodingType::class),
                    'ignore_ssl' => $request->boolean('ignore_ssl'),
                    'authentication_type' => $request->enum('authorization_type', AuthorizationType::class),
                    'gateway_id' => $gateway->id,
                ]);

                $gateway->info()->save($httpInfo);
            } else {
                $smppInfo = SmppInfo::create([
                    'ip_address' => $request->string('ip_address')->toString(),
                    'port' => $request->string('port')->toString(),
                    'username' => $request->string('username')->toString(),
                    'password' => $request->string('password')->toString(),
                    'sender' => $request->string('sender')->toString(),
                    'gateway_id' => $gateway->id,
                ]);

                $gateway->info()->save($smppInfo);
            }

            $request->collect('params')->each(function ($param) use ($gateway) {

                $gateway->params()->save(new GatewayParam([
                    'name' => Arr::get($param, 'name', null) ?? $param['type'],
                    'type' => $param['type'],
                    'value' => Arr::get($param, 'value'),
                    'gateway_id' => $gateway->id,
                ]));
            });
        });

        return to_route('gateway.index');
    }

    public function edit(Gateway $gateway)
    {
        abort_unless(auth()->user()->admin, 403);

        $methodTypes = MethodType::toArray();
        $contentTypes = ContentType::toArray();
        $encodingTypes = EncodingType::toArray();
        $authTypes = AuthorizationType::toArray();
        $delayTypes = DelayType::toArray();

        $gateway->load('params', 'info');

        return Inertia::render('Gateway/Edit',
            compact('gateway', 'methodTypes', 'contentTypes', 'encodingTypes', 'authTypes', 'delayTypes')
        );
    }

    public function update(
        Gateway $gateway,
        UpdateGatewayRequest $request,
    )
    {
        abort_unless(auth()->user()->admin, 403);

        DB::transaction(function () use ($request, $gateway) {
            $type = $request->enum('type', GatewayType::class);

            $gateway->update([
                'name' => $request->string('name')->toString(),
                'type' => $type,
                'cost' => money($request->float('cost')),
                'limit' => $request->integer('limit'),
                'delay' => $request->integer('delay'),
                'delay_type' => $request->enum('delay_type', DelayType::class),
                'enabled' => $request->boolean('enabled'),
            ]);

            if ($type === GatewayType::HTTP) {
                $gateway->info()->update([
                    'base_url' => $request->string('base_url')->toString(),
                    'success_keyword' => $request->string('success_keyword')->toString(),
                    'json_message_key' => $request->string('json_message_key')->toString(),
                    'webhook_json_message_key' => $request->string('webhook_json_message_key')->toString(),
                    'webhook_json_status_key' => $request->string('webhook_json_status_key')->toString(),
                    'method_type' => $request->enum('method_type', MethodType::class),
                    'json_encoded' => $request->boolean('json_encoded'),
                    'content_type' => $request->enum('content_type', ContentType::class),
                    'accept' => $request->enum('content_type', ContentType::class),
                    'encoding' => $request->enum('encoding_type', EncodingType::class),
                    'ignore_ssl' => $request->boolean('ignore_ssl'),
                    'authentication_type' => $request->enum('authorization_type', AuthorizationType::class),
                ]);
            } else {
                $gateway->info()->update([
                    'ip_address' => $request->string('ip_address')->toString(),
                    'port' => $request->string('port')->toString(),
                    'username' => $request->string('username')->toString(),
                    'password' => $request->string('password')->toString(),
                ]);
            }

            $gateway->params()->delete();

            $request->collect('params')->each(function ($param) use ($gateway) {
                $gateway->params()->save(new GatewayParam([
                    'name' => Arr::get($param, 'name', null) ?? $param['type'],
                    'type' => $param['type'],
                    'value' => Arr::get($param, 'value'),
                    'gateway_id' => $gateway->id,
                ]));
            });
        });

        return to_route('gateway.index');
    }
}
