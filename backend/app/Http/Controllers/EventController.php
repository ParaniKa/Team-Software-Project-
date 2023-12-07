<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;


class EventController extends Controller
{
     //get all
    public function index()
    {
        $events = Event::all();
        return response()->json(['events'=>$events,200]);
    }

    //get by id
    public function show($id)
    {
        $events = Event::find($id);
        if(!empty($events))
        {
            return response()->json(['events'=>$events,200]);
        }
        else
        {
            return response()->json([
                "message" => "Event not found"
            ], 404);
        }
    }

    //create Event
    public function store(Request $request)
    {
        $request->validate([
            'event_name' => 'required',
            'hall_description' =>'required',
            'food_description' =>'required',
        ]);

        $event = new Event;
        $event->event_name = $request->event_name;
        $event->hall_description = $request->hall_description;
        $event->food_description = $request->food_description;

        $event->save();
        return response()->json([
            "message" => "Event Added Successfully."
        ], 201);
    }

     //update
    public function update(Request $request, $id)
    {
            $request->validate([
                'event_name' => 'required',
                'hall_description' =>'required',
                'food_description' =>'required',
            ]);

            $event = Event::find($id);
            if($event)
            {
                $event->event_name = $request->event_name;
                $event->hall_description = $request->hall_description;
                $event->food_description = $request->food_description;
    
                 $event->update();

                return response()->json([ "message" => "Event Updated Successfully."], 201); 
            }
            else
            {
                return response()->json(["message" => "Event Not Found."], 404);
            }
    }
    //detele
    public function delete($id)
    {
        $event = Event::find($id);
        if($event) 
        {
           $event->delete();
            return response()->json([ "message" => "Event Deleted Successfully."], 200);
        } 
        else
        {
            return response()->json(["message" => "Event not found."], 404);
        }
    }

}
