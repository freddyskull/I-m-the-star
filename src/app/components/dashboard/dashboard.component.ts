import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  
  constructor() { }
  navbarClass:string = '';
  ngOnInit() {
   this.navbarClass = localStorage.getItem('navbar-data-color');
  }



}
