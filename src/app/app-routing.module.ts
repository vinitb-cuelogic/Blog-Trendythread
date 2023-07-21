import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './core/layouts/private-layout/private-layout.component';
import { PublicLayoutComponent } from './core/layouts/public-layout/public-layout.component';
import { LoginComponent } from './features/authentication/components/login/login.component';
import { RegisterComponent } from './features/authentication/components/register/register.component';
import { HomePageComponent } from './features/home/home-page/home-page.component';
import { UserHomeComponent } from './features/user/components/user-home/user-home.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import(
            './features/home/home.module'
          ).then((m) => m.HomeModule),
      },
      {
        path: '',
        loadChildren: () =>
          import(
            './features/authentication/authentication.module'
          ).then((m) => m.AuthenticationModule),
      },
    ],
  },
  {
    path: 'trendythreads',
    component: PrivateLayoutComponent,
    // canActivate: [AuthGuard, ChildAuthGuard],
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./features/user/user.module').then(
            (m) => m.UserModule
          ),
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
