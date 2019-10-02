import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public serv: AuthService, private rout: Router, private ngZone:NgZone) { }
  login:boolean = false;
  user: any = {
    email: '',
    pass: ''
  }

  userData:any = {
    name: '',
    picture: '',
    nivel: 'nivel 1'
  }

  ngOnInit() {
  }

  loginGoogle() {
    this.serv.googleUser().then((res) => {
      this.redirect();
    }).catch(err => this.serv.openSnackBar(err,''))
  }

  loginFacebook() {
    this.serv.facebookUser().then((res) => {
      this.redirect();
      let profile:any = res.additionalUserInfo.profile;
      this.userData.name    = profile.name;
      this.userData.picture = profile.picture.data.url;
      
      sessionStorage.setItem('userData', JSON.stringify(this.userData));
    }).catch(err => this.serv.openSnackBar(err,''))
  }

  currntUser(form: NgForm) {
    if (form.valid) {
      this.serv.loginUser(this.user.email, this.user.pass).then((res) => {
        this.redirect();
      }).catch(err => this.serv.openSnackBar(err,''))
    }
  }

  register(formData: NgForm){
    if (formData.valid) {
      this.serv.registerUser(this.user.email, this.user.pass).then((res) => {
        this.redirect();
      }).catch(err => this.serv.openSnackBar(err,''))
    }
  }

  redirect(){
    this.ngZone.run(() => this.rout.navigate(['/inicio'])).then();
  }
}



