import { Component, OnInit, Input, SimpleChanges, OnChanges, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

  constructor(public rout: Router, private serv: AuthService) { }
  headerColorData: string = 'bg-white';
  wrapper = false;
  ventana:any;
  evento:EventListener;
  sidebarStatus:boolean = false;
  btnShow:boolean = false;
  profile:any = [];
  @Input() headerEvent;
  @Output() EventSidebar:EventEmitter<boolean> = new  EventEmitter<boolean>();
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.headerEvent.currentValue != undefined) {
      this.headerColorData = changes.headerEvent.currentValue;
    }
  }

  ngOnInit() {
    if (localStorage.getItem('header-color-data') != undefined) {
      this.headerColorData = localStorage.getItem('header-color-data');
    }
    this.profile = JSON.parse(sessionStorage.getItem('userData'));
  }

  hideSidebar(){
    this.sidebarStatus =! this.sidebarStatus;
    this.EventSidebar.emit(this.sidebarStatus);
  }

  logOut() {
    this.serv.onLogOut();
    this.rout.navigate(['login'])
  }
}
