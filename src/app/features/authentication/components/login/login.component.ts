import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(public authService: FirebaseService,public router: Router) { }
  isSignedIn=false
  ngOnInit(): void {
  }
  onalert() {
    console.log("sjskskok")
  }
  async OnsignIn(email:string, pass:string)
  {
    console.log("inside login")
    await this.authService.signIn(email, pass)
    if (this.authService.isLoggedIn)
    {
      this.isSignedIn = true
      this.router.navigate(['/trendythreads/user-home']);
    }
    else {
      this.isSignedIn=false
    }
  }

}
