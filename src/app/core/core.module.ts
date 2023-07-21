import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthenticationModule } from '../features/authentication/authentication.module';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { PublicHeaderComponent } from './components/public-header/public-header.component';
import { PrivateLayoutComponent } from './layouts/private-layout/private-layout.component';
@NgModule({
  declarations: [
    PublicLayoutComponent,
    FooterComponent,
    HeaderComponent,
    PublicHeaderComponent,
    PrivateLayoutComponent,
  ],
  imports: [RouterModule, AuthenticationModule],
  exports: [FooterComponent, HeaderComponent, PublicHeaderComponent],
  providers: [],
})
export class CoreModule {}
