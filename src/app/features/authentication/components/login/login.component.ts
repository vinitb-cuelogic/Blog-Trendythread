import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormBuilder,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isLoggedIn=false
  constructor(
    public authService: AuthService,
    public router: Router,
    private fb: FormBuilder
  ) {}
  loginForm = this.fb.group({
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
  ngOnInit(): void {
    
  }

  login(){
    this.authService.login(this.loginForm.value).subscribe(
      (data)=>{
        this.isLoggedIn=true
        localStorage.setItem('user', JSON.stringify(data));
        Swal.fire(
          {
            title: "Login Successful",
            icon: "success"
          });
        this.router.navigate(['/trendythreads/user-home']);
      },
      (error)=>{
        Swal.fire(
          {
            title: "Bad Credentials",
            text: error.message,
            icon: "warning"
          });
        console.log(error)
      }
    )
  }

}
