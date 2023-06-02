<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ItemController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Item/List');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'title' => 'required|string|max:31',
            'date' => 'required|date',
            'priority' => 'required|integer|between:1,5',
            'description' => 'required|string|max:255',
        ]);

        $dateString = $request->date;
        $timestamp = Carbon::parse($dateString)->toDateTimeString();
        $item = Item::create([
            'title' => $request->title,
            'deadline' => $timestamp,
            'priority' => $request->priority,
            'description' => $request->description,
            'is_done' => false,
            'user_id' => 1,
        ]);

//        return redirect(RouteServiceProvider::HOME);

        return Redirect::to('/dashboard');
    }
}
