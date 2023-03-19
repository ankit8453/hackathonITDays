import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent {
  
  resetPassword(){
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Your password has been reset successfully!',
      showConfirmButton: false,
      timer: 1500
    })
  }
}
