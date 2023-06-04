<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ItemController;
use App\Http\Controllers\SettingController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::get('/list', function () {
    return Inertia::render('TodoList');
})->middleware(['auth', 'verified'])->name('list');

Route::get('/matrix', function () {
    return Inertia::render('TodoMatrix');
})->middleware(['auth', 'verified'])->name('matrix');



Route::middleware('auth')->group(function () {
//    Route::get('/list', function () {
//        return Inertia::render('TodoList');
//    });
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');


    Route::get('/setting', [SettingController::class, 'edit'])->name('setting.edit');
    Route::patch('/setting', [SettingController::class, 'update'])->name('setting.update');

    Route::get('/items', [ItemController::class, 'index'])->name('item.index');
    Route::post('/items', [ItemController::class, 'store'])->name('item.create');
    Route::patch('/items', [ItemController::class, 'update'])->name('item.edit');

    Route::patch('/items/{item_id}/done', [ItemController::class, 'toggleDoneStatus'])->name('item.update.done');

});

require __DIR__ . '/auth.php';
