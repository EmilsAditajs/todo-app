<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreTaskRequest;
use App\Http\Requests\UpdateTaskRequest;
use App\Models\Task;

class TaskController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return JsonResponse
     */
    public function index()
    {
        $tasks = Task::all();

        return response()->json($tasks, 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  StoreTaskRequest  $request
     * @return JsonResponse
     */
    public function store(StoreTaskRequest $request)
    {
        $task = Task::create($request->validated());

        return response()->json($task, 201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  UpdateTaskRequest  $request
     * @param  Task  $task
     * @return JsonResponse
     */
    public function update(UpdateTaskRequest $request, Task $task)
    {
        $task->update($request->validated());

        return response()->json($task, 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  Task  $task
     * @return JsonResponse
     */
    public function destroy(Task $task)
    {
        $task->delete();

        return response()->json(null, 204);
    }
}
