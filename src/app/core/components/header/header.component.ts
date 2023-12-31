import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public route:Router) { }

  ngOnInit(): void {
  }
  logout() {
    localStorage.removeItem('user');
    this.route.navigate(['/login']);
  }
}
