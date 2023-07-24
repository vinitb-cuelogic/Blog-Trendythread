import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePageComponent } from './home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';


@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [      
    HomeRoutingModule,
    CoreModule,
    SharedModule
    ],
  exports: [
    HomePageComponent,

  ],
  providers: [],
})
export class HomeModule {}
