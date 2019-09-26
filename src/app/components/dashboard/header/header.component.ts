import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  headerColorData:string = '';
  ngOnInit() {
    this.headerColorData = localStorage.getItem('header-color-data');
  }

}
