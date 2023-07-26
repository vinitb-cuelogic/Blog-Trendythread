import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;

  constructor(public auth: AngularFireAuth,public router : Router) { }
  async signIn(email: string, password: string) {
    console.log("ssjdsj")
    await this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn=true
        localStorage.setItem('user', JSON.stringify(res.user));
        Swal.fire(
          {
            title: "Login Successful",
            icon: "success"
          });
        this.router.navigate(['/trendythreads/user-home']);
       
      })
      .catch((error) => {
        Swal.fire(
          {
            title: "Bad Credentials",
            text: error.message,
            icon: "warning"
          });
        console.log(error)
      });
  }

  async signUp(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn=true
        localStorage.setItem('user', JSON.stringify(res.user));
        Swal.fire(
          {
            title: "Signup Successful, Please Login to Continue.",
            icon: "success"
          });
        this.router.navigate(['/login']);
      })
      .catch ((error) => {
        Swal.fire(
          {
            title: "Bad Credentials",
            text: error.message,
            icon: "warning"
          });
        console.log(error)
      });
  }

 
  logOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      // this.router.navigate(['sign-in']);
    });
  }
}

