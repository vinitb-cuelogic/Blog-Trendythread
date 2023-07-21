import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../../services/firebase-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public authService: FirebaseService) { } 
  isSignedIn=false
  ngOnInit(): void {
  }
  async OnsignUp(email:string, pass:string)
  {
    await this.authService.signUp(email, pass)
    if (this.authService.isLoggedIn)
    {
      this.isSignedIn=true
    }
    else {
      this.isSignedIn=false
    }
  }
}
