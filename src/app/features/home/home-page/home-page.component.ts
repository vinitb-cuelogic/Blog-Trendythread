import { Component, OnInit } from '@angular/core';
import { HomeService } from '../services/home.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private homeService:HomeService) { }

  ngOnInit(): void {
    this.getPosts();
  }

  posts:any;

  getPosts(){
    this.homeService.getPosts().subscribe(
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
