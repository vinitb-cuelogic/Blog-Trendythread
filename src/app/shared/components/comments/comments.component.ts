import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  constructor(private commentService:CommentService) { }

  ngOnInit(): void {
  }

  newComment:any ={}
  user:any;

  addComment(comment:string){
    this.newComment.body = comment;
    this.newComment.postid = 1;
    this.user = JSON.parse(localStorage.getItem("user")||'{}');
    this.newComment.user = this.user.username

    this.commentService.addComment(this.newComment).subscribe(
      ()=>{

      },
      ()=>{

      }
    )

    console.log(comment)
  }
}
