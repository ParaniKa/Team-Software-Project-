<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use Illuminate\Http\Request;

class BookingController extends Controller
{
    //
     //get all
     public function index()
     {
         $bookings = Booking::all();
         return response()->json(['bookings'=>$bookings,200]);
     }
 
     //get by id
     public function show($id)
     {
         $bookings = Booking::find($id);
         if(!empty($bookings))
         {
             return response()->json(['bookings'=>$bookings,200]);
         }
         else
         {
             return response()->json([
                 "message" => "Booking not found"
             ], 404);
         }
     }
 
     //create Event
     public function store(Request $request)
     {

        // $file =$request->file("file");
        // $uploadPath = "images/profile";

        // $originalName = $file->getClientOriginalName();

        // $file->move($uploadPath,$originalName);

         $request->validate([
             'customer_name' => 'required',
             'customer_email' =>'required',
             'event_name' =>'required',
             'event_date' =>'required',
             'event_start_time' =>'required',
             'event_end_time' =>'required',
             'payment_date' =>'required',
             'payment_total' =>'required',
             'payment_method'=> 'required',

            //  'file'=> 'required',

             'booking_status' =>'required',

         ]);
 
         $booking = new Booking;
         $booking->customer_name = $request->customer_name;
         $booking->customer_email = $request->customer_email;
         $booking->event_name = $request->event_name;
         $booking->event_date = $request->event_date;
         $booking->event_start_time = $request->event_start_time;
         $booking->event_end_time = $request->event_end_time;
         $booking->payment_date = $request->payment_date;
         $booking->payment_total = $request->payment_total;
         $booking->payment_method = $request->payment_method;

        //  $booking->file = $request->file;

         $booking->booking_status = $request->booking_status; 

         $booking->save();
         return response()->json([
             "message" => "Booking Added Successfully."
         ], 201);
     }
 
      //update
     public function update(Request $request, $id)
     {
             $request->validate([
                 'customer_name' => 'required',
                 'customer_email' =>'required',
                 'event_name' =>'required',
                 'event_date' => 'required',
                 'event_start_time' =>'required',
                 'event_end_time' =>'required',
                 'payment_date' =>'required',
                 'payment_total' =>'required',
                 'payment_method'=> 'required',
                 'booking_status' =>'required',
                  
                 
             ]);
 
             $booking = Booking::find($id);
             if($booking)
             {
                 $booking->customer_name = $request->customer_name;
                 $booking->customer_email = $request->customer_email;
                 $booking->event_name = $request->event_name;
                 $booking->event_date = $request->event_date;
                 $booking->event_start_time = $request->event_start_time;
                 $booking->event_end_time = $request->event_end_time;
                 $booking->payment_date = $request->payment_date;
                 $booking->payment_total = $request->payment_total;
                 $booking->payment_method = $request->payment_method;
                 $booking->booking_status = $request->booking_status;
     
                 $booking->update();
 
                 return response()->json([ "message" => "Booking Updated Successfully."], 201); 
             }
             else
             {
                 return response()->json(["message" => "Booking Not Found."], 404);
             }
     }
     //detele
     public function delete($id)
     {
         $booking = Booking::find($id);
         if($booking) 
         {
            $booking->delete();
             return response()->json([ "message" => "Booking Deleted Successfully."], 200);
         } 
         else
         {
             return response()->json(["message" => "Booking not found."], 404);
         }
     }
 
 
}
