import { NgModule } from '@angular/core';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { CommentsComponent } from './components/comments/comments.component';
@NgModule({
    declarations: [
    BlogCardComponent,
    CommentsComponent
  ],
    imports: [],
    exports: [BlogCardComponent,CommentsComponent],
    providers: []
})
export class SharedModule { }
