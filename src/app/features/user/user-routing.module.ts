import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { MyblogsComponent } from './components/myblogs/myblogs.component';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: 'create-new', component: NewBlogComponent },
  { path: 'blog-page', component: BlogPageComponent },
  {
    path: 'user-home',
    component: UserHomeComponent,
  },
  {
    path: 'myblogs',
    component: MyblogsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
