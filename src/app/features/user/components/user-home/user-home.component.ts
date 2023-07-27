import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserhomeService } from '../../services/userhome.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  user: any;
  username: string |null = '';
  constructor(private userHomeService:UserhomeService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('user') || '{}');
    this.username = this.user.username;
    this.getPosts()
  }

  posts:any;

  getPosts(){
    this.userHomeService.getPosts().subscribe(
      (data)=>{
        console.log(data);
        
        this.posts= data
      },
      (error)=>{
        console.log(error.message);
        
      }
    );
  }

}
