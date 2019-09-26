import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-theme',
  templateUrl: './ui-theme.component.html',
  styleUrls: ['./ui-theme.component.scss']
})
export class UiThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  navbarColor(Class:string){
    localStorage.setItem('navbar-data-color', Class);
  }

  hederColor(Class:string){
    localStorage.setItem('header-color-data',Class);
  }

}
