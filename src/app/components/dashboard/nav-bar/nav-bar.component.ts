import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
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
      icon: 'fab fa-facebook-f',
      subElement: true,
      link1: {
        icon:'fas fa-flag',
        name: 'Fan pages likes',
        dir: '/facebook-fan-page-agregar',
      },
      link2: {
        icon:'fas fa-thumbs-up',
        name: 'Reacciones',
        dir: '/facebook-reacciones-agregar',
      },
      link3: {
        icon:'fas fa-reply',
        name: 'Comentarios',
        dir: '/facebook-comentarios-agregar',
      },
    },
    {
      header:'Acumula puntos',
      name: 'Ganar monedas',
      dir: '/inicio',
      icon: 'fas fa-coins',
      subElement: true,
      link1: {
        icon:'fas fa-flag',
        name: 'Fan pages likes',
        dir: '/paginas-fan-page',
      },
      link2: {
        icon:'fas fa-thumbs-up',
        name: 'Reacciones',
        dir: '/paginas-reacciones',
      },
      link3: {
        icon:'fas fa-reply',
        name: 'Comentarios',
        dir: '/paginas-comentarios',
      },
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
