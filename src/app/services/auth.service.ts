import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { map, take, tap } from 'rxjs/operators';
import { promise } from 'protractor';
import { resolve } from 'dns';
import { reject } from 'q';
import {MatSnackBar} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, private _snackBar: MatSnackBar) { }

  currentLogin(){
    return this.afAuth.authState
  }

  registerUser(email:string,pass:string){
    return new Promise((resolve,reject) => {
      this.afAuth.auth.createUserWithEmailAndPassword(email,pass).then(userData => resolve(userData), 
      err => reject(err));
    })
  }

  loginUser(email:string, pass:string){
    return new Promise((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, pass).then(userData => resolve(userData),
      err => reject(err)) 
    })
  }

  facebookUser(){
    return this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider());
  }

  googleUser(){
   return  this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }

  onLogOut(){
    this.afAuth.auth.signOut();
  }

  isAuth(){
    return this.afAuth.authState.pipe(map(auth => auth));
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 6000,
    });
  }
}
