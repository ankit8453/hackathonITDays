import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homesection1',
  templateUrl: './homesection1.component.html',
  styleUrls: ['./homesection1.component.css']
})
export class Homesection1Component implements OnInit {
  constructor( 
    private router: Router
  ) {}
  ngOnInit() {
    this.router.navigate(['']);
  }
}
