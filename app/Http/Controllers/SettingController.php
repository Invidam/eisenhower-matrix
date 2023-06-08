<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class SettingController extends Controller
{
    public function edit(Request $request): Response
    {
        return Inertia::render('Setting/Setting', [
            'status' => session('status'),
        ]);
    }

    public function update(Request $request)
    {

        $request->validate([
            'id' => 'required|integer',
            'important_hour_range' => 'required|integer|between:1,10000',
            'important_priority_range' => 'required|integer|between:1,5',
        ]);

        $user = User::findOrFail($request->id);

        $user->important_hour_range = $request->important_hour_range;
        $user->important_priority_range = $request->important_priority_range;

        $user->save();

        return Redirect::route('setting.edit');
    }
}
