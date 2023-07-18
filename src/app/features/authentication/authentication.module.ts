import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
@NgModule({
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    imports: [
        SharedModule,
        AuthenticationRoutingModule
    ],
    exports: [
        LoginComponent,
        RegisterComponent
    ],
    providers: []
})
export class AuthenticationModule { }
