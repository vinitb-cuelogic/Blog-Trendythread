import { Component, OnInit } from '@angular/core';
import { MyblogsService } from '../../services/myblogs.service';

@Component({
  selector: 'app-myblogs',
  templateUrl: './myblogs.component.html',
  styleUrls: ['./myblogs.component.css']
})
export class MyblogsComponent implements OnInit {

  constructor(private myBlogService:MyblogsService) { }

  ngOnInit(): void {
    this.getPosts()
  }
  posts:any;

  getPosts(){
    this.myBlogService.getPosts().subscribe(
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
