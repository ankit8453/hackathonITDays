import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Route, Router } from '@angular/router';
import { sign } from 'crypto';
import { LoginComponent } from '../login/login.component'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,private router:Router) { }


// writing AuthService class and code for login and logout

// for  Login 

login(email : string, password : string)
{ 
  this.fireauth.signInWithEmailAndPassword(email,password).then((user)=>{
    localStorage.setItem('token','true');
    this.router.navigate(['/user-dashboard']);

  },(error)=>{
    console.log("Opps !! Something went wrong ...");
    this.router.navigate(['/login']);
    // alert("Unauthorised User...? Please Register First");

  })
}
  // Resister User method 

  register(email : string, password : string)
  {
    this.fireauth.createUserWithEmailAndPassword(email,password).then((user)=>{
      alert("User Registered Successfully ! Thanks for Reaching with us");
  
      this.router.navigate(['/user-dashboard']);
     },(error)=>{
      alert("Sorry we can't proceed you this time  Try Again later  ...");
      this.router.navigate(['/sign-up']);
     })
    
    // localStorage.setItem('token','true');
  }
  // for logout
     signOut(){
      this.fireauth.signOut().then(()=>{  
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
      },(error)=>{
        console.log("Opps !! Something went wrong ...");
        this.router.navigate(['/user-dashboard']);
      })
     }


  }
