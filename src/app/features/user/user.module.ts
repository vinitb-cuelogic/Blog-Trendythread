import { NgModule } from '@angular/core';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MyblogsComponent } from './components/myblogs/myblogs.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [NewBlogComponent, UserHomeComponent, BlogPageComponent, MyblogsComponent],
  imports: [UserRoutingModule, AngularEditorModule, SharedModule, CommonModule],
  exports: [NewBlogComponent, UserHomeComponent,BlogPageComponent,MyblogsComponent],
  providers: [],
})
export class UserModule {}
