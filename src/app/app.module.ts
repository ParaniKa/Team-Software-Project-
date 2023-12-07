import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FullCalendarModule } from '@fullcalendar/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { LogoutComponent } from './logout/logout.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ViewUserComponent } from './view-user/view-user.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { EventComponent } from './event/event.component';
import { CreateeventComponent } from './createevent/createevent.component';
import { EventeditComponent } from './eventedit/eventedit.component';
import { BookingComponent } from './booking/booking/booking.component';
import { CreatebookingComponent } from './booking/createbooking/createbooking.component';
import { EditbookingComponent } from './booking/editbooking/editbooking.component';
import { AdminbookingComponent } from './booking/adminbooking/adminbooking.component';
import { BookingcalenderComponent } from './booking/bookingcalender/bookingcalender.component';
import { AdminSideMenuComponent } from './admin/admin-side-menu/admin-side-menu.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminuserComponent } from './user/adminuser/adminuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { PaymentComponent } from './booking/payment/payment.component';
import { LightgalleryModule } from 'lightgallery/angular';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ForgotpasswordComponent,
    ResetpasswordComponent,
    AdmindashboardComponent,
    UserprofileComponent,
    LogoutComponent,
    UserdetailsComponent,
    ContactusComponent,
    ViewUserComponent,
    CreateuserComponent,
    EventComponent,
    CreateeventComponent,
    EventeditComponent,
    BookingComponent,
    CreatebookingComponent,
    EditbookingComponent,
    AdminbookingComponent,
    BookingcalenderComponent,
    AdminSideMenuComponent,
    AdminBodyComponent,
    AdminuserComponent,
    EdituserComponent,
    AdminFooterComponent,
    PaymentComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FullCalendarModule,
    LightgalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
