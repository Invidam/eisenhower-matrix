<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Carbon\Carbon;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
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
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:31',
            'deadline' => 'required|date',
            'priority' => 'required|integer|between:1,5',
            'description' => 'required|string|max:255',
        ]);

        $deadlineString = $request->deadline;
        $timestamp = Carbon::parse($deadlineString)->toDateTimeString();
        $item = Item::create([
            'title' => $request->title,
            'deadline' => $timestamp,
            'priority' => $request->priority,
            'description' => $request->description,
            'is_done' => false,
            'user_id' => Auth::id(),
        ]);

//        return redirect(RouteServiceProvider::HOME);

//        return Redirect::to('/dashboard');
    }

    public function index(Request $request)
    {
        $userId = Auth::id();

        $sortBy = $request->query('sort_type');
        $sortDirection = $request->query('sort_direction');

        // Use the query parameters to sort or filter your data

        // Example: Retrieving items with query parameters
        $items = Item::getSortedItemsForUser($userId, $sortBy, $sortDirection);

        // Return the response
        return response()->json($items);
    }
    public function toggleDoneStatus(Request $request, $item_id)
    {
        Item::toggleDoneStatus($item_id);
    }

}
