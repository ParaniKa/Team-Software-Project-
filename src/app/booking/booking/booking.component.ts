import { Component } from '@angular/core';
import { BookingService } from 'src/app/services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent {

  constructor(private bookingService:BookingService){}

  payment_methods=[' cash deposit', 'online payment'];
  customer_name!: string
  customer_email!: string
  event_name!: string
  event_date!: any
  event_start_time!:any
  event_end_time!:any
  booking_status = "Not Confirmed";
  payment_date!: any
  payment_total!:any
  payment_method!:any

  errors: any = [];
  //file:any

  saveBooking(){
    var inputData = {
      customer_name:this.customer_name,
      customer_email:this.customer_email,
      event_name:this.event_name,
      event_date:this.event_date,
      event_start_time:this.event_start_time,
      event_end_time:this.event_end_time,
      payment_date:this.payment_date,
      payment_total:this.payment_total,
      payment_method:this.payment_method,
      booking_status:this.booking_status,
      
    }

    // var formdata = new FormData();

    // formdata.append("customer_name",this.customer_name);
    // formdata.append("customer_email",this.customer_email);
    // formdata.append("event_name",this.event_name);
    // formdata.append("event_date",this.event_date);
    // formdata.append("event_start_time",this.event_start_time);
    // formdata.append("event_end_time",this.event_end_time);
    // formdata.append("payment_date",this.payment_date);
    // formdata.append("payment_total",this.payment_total);
    // formdata.append("payment_method",this.payment_method);
    // formdata.append("booking_status",this.booking_status);

    // formdata.append("file" ,this.file, this.file);


    
    
    this.bookingService.saveBooking(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.customer_name = '';
        this.customer_email = '';
        this.event_date ='';
        this.event_date ='';
        this.event_start_time ='';
        this.event_end_time ='';
        this.payment_date ='';
        this.payment_total ='';
        this.payment_method ='';
        this.booking_status ='Not Confirmed';
        

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })

    
   
  }



//file upload
  // imageUpload(event:any){
  //   //console.log(event);
  //   this.file = event.target.files[0];
  //   console.log(this.file);
  // }






  
}
