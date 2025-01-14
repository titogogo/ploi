<?php

namespace App\Http\Controllers;

use App\Http\Requests\CreateTemplateRequest;
use App\Http\Requests\UpdateTemplateRequest;
use App\Models\Template;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Inertia\Inertia;
use Spatie\QueryBuilder\AllowedFilter;
use Spatie\QueryBuilder\QueryBuilder;

class TemplateController extends Controller
{
    public function index(Request $request)
    {
        $globalSearch = AllowedFilter::callback('q', function ($query, $value) {
            $query->where(function ($query) use ($value) {
                Collection::wrap($value)->each(function ($value) use ($query) {
                    $query->orWhere('name', 'LIKE', "%{$value}%");
                });
            });
        });

        $templates = QueryBuilder::for(Template::class)
            ->allowedFilters($globalSearch)
            ->defaultSort('-id')
            ->allowedSorts(['id', 'name', 'content'])
            ->where('user_id', auth()->id())
            ->paginate($request->input('per_page') ?? 15)
            ->appends(request()->query());

        return Inertia::render('Template/Index', compact('templates'));
    }

    public function create()
    {
        return Inertia::render('Template/Create');
    }

    public function store(CreateTemplateRequest $request)
    {
        Template::create([
            'name' => $request->string('name')->toString(),
            'content' => $request->string('content')->toString(),
            'user_id' => auth()->id(),
        ]);

        return to_route('templates.index');
    }

    public function edit(Template $template)
    {
        abort_unless($template->user_id === auth()->id(), 403);

        return Inertia::render('Template/Edit', compact('template'));
    }

    public function update(UpdateTemplateRequest $request, Template $template)
    {
        abort_unless($template->user_id === auth()->id(), 403);

        $template->update([
            'name' => $request->string('name')->toString(),
            'content' => $request->string('content')->toString(),
        ]);

        return to_route('templates.index');
    }

    public function destroy(Template $template)
    {
        abort_unless($template->user_id === auth()->id(), 403);

        $template->delete();

        return to_route('templates.index');
    }
}
