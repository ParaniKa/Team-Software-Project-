<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Booking extends Model
{
    use HasFactory;
    protected $table ='bookings';
    protected $fillable = [
        'customer_name',
        'customer_email',
        'event_name',
        'event_date',
        'event_start_time',
        'event_end_time',
        'payment_date',
        'payment_total',
        'payment_method',
        //'file',
        'booking_status',


    ];
}
