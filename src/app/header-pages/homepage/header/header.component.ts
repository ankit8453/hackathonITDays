import { Component} from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IsActiveMatchOptions } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  // private activeSiteSection: string;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
  ){}

  public linkActiveOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact',
  };
 
 }

