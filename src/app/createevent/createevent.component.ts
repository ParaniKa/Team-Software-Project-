import { Component } from '@angular/core';
import { EventService } from '../services/event.service';

import * as pdfMake from "pdfmake/build/pdfmake";  
import * as pdfFonts from "pdfmake/build/vfs_fonts";  
//pdfMake.vfs = pdfFonts.pdfMake.vfs; 
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs; 





@Component({
  selector: 'app-createevent',
  templateUrl: './createevent.component.html',
  styleUrls: ['./createevent.component.css']
})
export class CreateeventComponent {

  constructor(private eventService: EventService){}

  eventname!: string
  halldetails!: string
  fooddetails!: string

  errors: any = [];

  saveEvent(){
    var inputData = {
      event_name:this.eventname,
      hall_description:this.halldetails,
      food_description:this.fooddetails
    }

    this.eventService.saveEvent(inputData).subscribe({
      next: (res: any) => {
        console.log(res, 'response');
        alert(res.message);
        this.eventname = '';
        this.halldetails = '';
        this.fooddetails = '';

      },
      error: (err: any) => {
        this.errors = err.error.errors;
        console.log(err.error.errors, 'errors')
      }
    })
  }

  // generatePDF() {  
  //   let docDefinition = {  
  //     header: 'C#Corner PDF Header',  
  //     content: 'Sample PDF generated with Angular and PDFMake for C#Corner Blog'  
  //   };  
   
  //   pdfMake.createPdf(docDefinition).open();  
  // }  






  // generatePDF() {  

  //   var inputData = {
  //     event_name:this.eventname,
  //     hall_description:this.halldetails,
  //     food_description:this.fooddetails
  //   }


  //   let docDefinition = {  
  //     header: 'C#Corner PDF Header',  
  //     content :[
  //       {
  //         text: 'Event Name: ' + inputData.event_name,
  //         style: 'header' // You can define a style for the text here
  //       },
  //       {
  //         text: 'Hall Description: ' + inputData.hall_description
          
  //       },
  //       {
  //         text: 'Food Description: ' + inputData.food_description
  //       }
  //     ]
  //         };  
   
  //   pdfMake.createPdf(docDefinition).open();  
  // 
//}  


generatePDF() {
  var inputData = {
    event_name: this.eventname,
    hall_description: this.halldetails,
    food_description: this.fooddetails
  };

  // Get the current date and time
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString();
  const formattedTime = currentDate.toLocaleTimeString();

  let docDefinition = {
    header: 'Customer Booking Details',
    content: [
      {
        text: 'Date: ' + formattedDate,
      },
      {
        text: 'Time: ' + formattedTime,
      },

      {
        text: 'Event Name: ' + inputData.event_name,
        style: 'header'
      },
      {
        text: 'Hall Description: ' + inputData.hall_description
      },
      {
        text: 'Food Description: ' + inputData.food_description
      },
      
    ]
  };

  pdfMake.createPdf(docDefinition).open();
}





}
