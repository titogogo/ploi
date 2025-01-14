<?php

namespace App\Http\Responses;

use Illuminate\Contracts\Support\Responsable;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Resources\Json\JsonResource;
use TiMacDonald\JsonApi\JsonApiResource;

final readonly class ModelResponse implements Responsable
{
    public function __construct(
        private JsonResource|JsonApiResource $model,
    )
    {
    }

    public function toResponse($request): JsonResponse
    {
        return new JsonResponse(
            data: $this->model,
        );
    }
}
