import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { HomeComponent } from './componet/home/home.component';
import { LoginDashBoradComponent } from './componet/login-dash-borad/login-dash-borad.component';
import { SignUpComponent } from './componet/sign-up/sign-up.component';
// import { HomeModule } from './home/home/home.module';

const routes: Routes = [
  {path: '' ,component: LoginDashBoradComponent},
  {path:'login', component: LoginComponent},
  {path:'home', component: HomeComponent},
  {path:'singup', component: SignUpComponent}
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
  LoginComponent,
  HomeComponent,
  SignUpComponent
]
