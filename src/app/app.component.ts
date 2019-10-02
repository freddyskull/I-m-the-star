import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private serv: AuthService){}
  login:any;
  navbarEvent:string;
  headerEvent:string;
  sidebarEvent:boolean = false;
  ngOnInit(): void {
    this.serv.currentLogin().subscribe(
      req => {
        this.login = req;
      }
    )
  }
  

}
