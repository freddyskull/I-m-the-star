import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, private rout:Router) { }

  ngOnInit() {
  }

  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
    this.rout.navigate([ '/inicio' ])
  }

}
