import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { ResetpasswordComponent } from './resetpassword/resetpassword.component';

import { UserprofileComponent } from './userprofile/userprofile.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';

import { LogoutComponent } from './logout/logout.component';

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


import { AdminSideMenuComponent } from './admin/admin-side-menu/admin-side-menu.component';
import { AdminBodyComponent } from './admin/admin-body/admin-body.component';
import { AdminuserComponent } from './user/adminuser/adminuser.component';
import { EdituserComponent } from './user/edituser/edituser.component';
import { BookingcalenderComponent } from './booking/bookingcalender/bookingcalender.component';
import { PaymentComponent } from './booking/payment/payment.component';



const routes: Routes = [
  {path:'',component:HomeComponent},

  {path:'register',component:RegisterComponent},//,canActivate:[AuthGuard]},
  {path:'login',component:LoginComponent},
  {path:'forgotpassword',component:ForgotpasswordComponent},
  {path:'resetpassword',component:ResetpasswordComponent},

  {path:'admindashboard',component:AdmindashboardComponent},

  {path:'userprofile',component:UserprofileComponent},
  {path:'userdetails',component:UserdetailsComponent},

  {path:'logout',component:LogoutComponent},

  {path:'contactus',component:ContactusComponent},

  {path:'view-user',component:ViewUserComponent},
  {path:'createuser',component:CreateuserComponent},

  {path:'event',component:EventComponent},
  {path:'createevent',component:CreateeventComponent},
  {path:':id/edit',component:EventeditComponent},

  {path:'booking/booking',component:BookingComponent},
  {path:'booking/createbooking',component:CreatebookingComponent},
  {path:'booking/id/editbooking',component:EditbookingComponent},
  {path:'booking/adminbooking',component:AdminbookingComponent},
  {path:'booking/bookingcalender',component:BookingcalenderComponent},
  {path:'booking/bookingpayment' ,component:PaymentComponent},


  {path:'admin/admin-side-menu',component:AdminSideMenuComponent},
  {path:'admin/admin-body',component:AdminBodyComponent},


  {path:'user/adminuser',component:AdminuserComponent},
  {path:':id/edituser',component:EdituserComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
