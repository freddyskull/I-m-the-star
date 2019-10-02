import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnChanges {
 
  nav: any = [
    {
      header:'Dasboard',
      name: 'Inicio',
      dir: '/inicio',
      icon: 'metismenu-icon pe-7s-rocket',
      subElement: false
    },
    {
      header:'Crear proyectos',
      name: 'Facebook',
      dir: '/facebook',
      icon: 'metismenu-icon fab fa-facebook-f',
    },
  ]

  constructor() { }
  navbarClass:string = '';
  @Input() navbarEvent;
  ngOnInit() {
    this.navbarClass = localStorage.getItem('navbar-data-color');
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.navbarEvent.currentValue != undefined){
      this.navbarClass = changes.navbarEvent.currentValue;
    }
  }

  headerEventColor(){
    this.navbarClass = localStorage.getItem('navbar-data-color');
  }

}
