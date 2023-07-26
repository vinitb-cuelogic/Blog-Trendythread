import { NgModule } from '@angular/core';
import { CoreModule } from '../core/core.module';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FirstCardComponent } from './components/first-card/first-card.component';
import { WelcomeCardComponent } from './components/welcome-card/welcome-card.component';
@NgModule({
    declarations: [
    BlogCardComponent,
    CommentsComponent,
    FirstCardComponent,
    WelcomeCardComponent,

  ],
    imports: [],
    exports: [BlogCardComponent,CommentsComponent,FirstCardComponent,WelcomeCardComponent,],
    providers: []
})
export class SharedModule { }
