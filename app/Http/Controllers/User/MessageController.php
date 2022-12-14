<?php

namespace App\Http\Controllers\User;

use App\Events\MessageEvent;
use App\Http\Controllers\Controller;
use App\Http\Controllers\MainController;
use App\Models\User\Message;
use Illuminate\Http\Request;

class MessageController extends MainController
{
    public function sendMessage(Request $request): ?array
    {
//        dd($request['message']);
        return event(new MessageEvent($request['message']));
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    public function store(Request $request)
    {
        $v = validator($request->all(), [
            'message' => 'required',
        ]);

        if($v->fails()){
            return $this->getResponse('error', $v->getMessageBag()->first(), '', 422);
        }

        event(new MessageEvent($request['message']));
        return $this->getResponse('success', 'Message Sent Successfully');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\User\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function show(Message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\User\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\User\Message  $message
     * @return \Illuminate\Http\Response
     */
    public function destroy(Message $message)
    {
        //
    }
}
