import { Component } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.css']
})
export class ForgetPassComponent {

  constructor(private _location: Location) 
  {}

  OTPsent(){
    alert("OTP sent to your registered email address. This OTP will be your password for the next 10 minutes.");
    this._location.back();
  }

}
