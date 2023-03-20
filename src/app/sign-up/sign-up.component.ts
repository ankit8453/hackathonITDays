import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  

  constructor(private router : Router) 
  {}

  SignedIn(){
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Your have succesfully signed up!',
        showConfirmButton: false,
        timer: 2000
      }); 
      setTimeout(()=> { 
      this.router.navigateByUrl('/header-pages/homepage')
      }, 2000)
  }
}
