//import { Component } from '@angular/core';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent implements OnInit{
  error={
    email:null
  };
  message:any;
  wait:boolean = false;
  constructor(private auth:AuthenticationService) { }

  ngOnInit(): void {
  }

  onSubmit(form:NgForm){
    this.wait = true;
    const email = form.value.email;
    this.auth.forgot(email).subscribe((res:any)=>{
      this.message = res.message;
      this.wait = false;
    }, (err)=>{
     this.error = err.error.errors;
     this.wait = false;
    })
  }
}
