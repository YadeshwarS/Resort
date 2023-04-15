import { Injectable } from '@angular/core';
import{ AngularFireAuth } from '@angular/fire/compat/auth'
import { Route, Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth : AngularFireAuth, private router : Router) { }
login(email : string, password : string) {
  this.fireauth.signInWithEmailAndPassword(email,password).then( ()=> {
    alert('login successfully');

    localStorage.setItem('token','true');
    this.router.navigate(['dash']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/login']);
  }
  )
}
// register method
reg(email : string, password: string, username: string) {
  this.fireauth.createUserWithEmailAndPassword(email,password).then(() =>{
   alert('registation successfully');
   this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
    this.router.navigate(['/reg'])
  })
}
// sign out
logout() {
  this.fireauth.signOut(). then(() => {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }, err => {
    alert(err.message);
  })
}
}
