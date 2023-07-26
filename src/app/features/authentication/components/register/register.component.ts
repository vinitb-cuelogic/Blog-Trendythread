import { Component, OnInit } from '@angular/core';
// import { FirebaseService } from '../../services/firebase-service.service';
import { AuthService } from '../../services/auth.service';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';
import { SignUpUser } from '../../view-models/sign-up-user';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public authService: AuthService, private fb: FormBuilder,public router : Router) {

  }

  ngOnInit(): void {
  }

  signupForm = this.fb.group({
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    username: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(
          '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}'
        ),
      ],
    ],
  });

  signUp() {
    console.log(this.signupForm.value)
    this.authService.signUp(this.signupForm.value).subscribe(
      (data) => {
        Swal.fire(
          {
            title: "Signup Successful, Please Login to Continue.",
            icon: "success"
          });
        this.router.navigate(['/login']);
      },
      (err)=>{
        Swal.fire(
          {
            title: "Bad Credentials",
            text: err.message,
            icon: "warning"
          });
        console.log(err)
      }
    );
  }

}
