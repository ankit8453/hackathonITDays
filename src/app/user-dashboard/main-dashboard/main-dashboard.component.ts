import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent {
  constructor(private _router: Router) {

  }
  confirmBox() {

    Swal.fire({
      title: 'Do you really want to log out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'You have been logged out!',
          'Hope to see you again soon!',
          'success'
        ).then((finalresult) => {
          if(finalresult.isConfirmed){
            this._router.navigate(["/header-pages/homepage"]);
          }
        })
      }
      else if(result.isDismissed) {}
    })
  }

}
