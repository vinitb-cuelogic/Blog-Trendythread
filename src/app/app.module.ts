import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AuthenticationModule } from './features/authentication/authentication.module';
import { HomeModule } from './features/home/home.module';
import { UserModule } from './features/user/user.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    AuthenticationModule,
    UserModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
