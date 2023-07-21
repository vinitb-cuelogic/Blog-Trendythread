import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  isLoggedIn = false;

  constructor(public auth: AngularFireAuth,public router : Router) { }
  async signIn(email: string, password: string) {
    await this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn=true
        localStorage.setItem('user', JSON.stringify(res.user));
        console.log("ssjdsj")
        // window.alert(res)
       
      })
      .catch((error) => {
        window.alert(error.message);
        console.log(error)
      });
  }

  async signUp(email: string, password: string) {
    await this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.isLoggedIn=true
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['/user-home']);
        // window.alert("Signup Successful")
      })
      .catch((error) => {
        console.log(error)
        window.alert(error.message);
      });
  }

 
  logOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('user');
      // this.router.navigate(['sign-in']);
    });
  }
}

