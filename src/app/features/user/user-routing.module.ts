import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { UserHomeComponent } from './components/user-home/user-home.component';

const routes: Routes = [
  { path: 'create-new', component: NewBlogComponent },
  { path: 'user-home', component: UserHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
