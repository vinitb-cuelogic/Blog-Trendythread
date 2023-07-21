import { NgModule } from '@angular/core';

import { NewBlogComponent } from './components/new-blog/new-blog.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [NewBlogComponent, UserHomeComponent],
  imports: [UserRoutingModule],
  exports: [NewBlogComponent, UserHomeComponent],
  providers: [],
})
export class UserModule {}
