import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { LoginPageComponent } from './inicio/login-page/login-page.component';
import { RegisterPageComponent } from './inicio/register-page/register-page.component';
import { AuthGuard, canActivate, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['dashboard']);


const routes: Routes = [
  {path: '', component:LoginPageComponent},
  {path: 'home', component:HomePageComponent, canActivate: [AuthGuard],data:{ authGuardPipe: redirectUnauthorizedToLogin }},
  {path: 'register', component:RegisterPageComponent},
  {path: '**', redirectTo: '', pathMatch: 'full',},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
