import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router : Router) 
  {}

  LoggedIn(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your have succesfully signed in!',
        showConfirmButton: false,
        timer: 2000
      }); 
      setTimeout(()=> { 
      this.router.navigateByUrl('/user-dashboard/user-profile')
      }, 2000)
  }

}
