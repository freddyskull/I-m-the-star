import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ui-theme',
  templateUrl: './ui-theme.component.html',
  styleUrls: ['./ui-theme.component.scss']
})
export class UiThemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  settings:boolean = false;
  @Output() 
  navbarChangeColor:EventEmitter<string> = new EventEmitter<string>();
  @Output() 
  headerChangeColor:EventEmitter<string> = new EventEmitter<string>();

  navbarColor(Class:string){
    localStorage.setItem('navbar-data-color', Class);
    this.navbarChangeColor.emit(Class);
  }

  hederColor(Class:string){
    localStorage.setItem('header-color-data',Class);
    this.headerChangeColor.emit(Class);
  }

}
