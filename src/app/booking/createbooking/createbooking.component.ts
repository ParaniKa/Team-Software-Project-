import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-createbooking',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.css']
})
export class CreatebookingComponent {

  constructor(private bookingService: BookingService){}

  customer_name!: string
  customer_email!: string

  errors: any = [];

  saveBooking(){
    var inputData = {
      customer_name:this.customer_name,
      customer_email:this.customer_email
    }

    this.bookingService.saveBooking(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.customer_name = '';
        this.customer_email = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }
}
