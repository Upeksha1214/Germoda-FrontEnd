import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componet/login/login.component';
import { HomeComponent } from './componet/home/home.component';
import { LoginDashBoradComponent } from './componet/login-dash-borad/login-dash-borad.component';
import { SignUpComponent } from './componet/sign-up/sign-up.component';
import { AboutComponent } from './componet/about/about.component';
import { CoursesComponent } from './componet/courses/courses.component';
import { TrainersComponent } from './componet/trainers/trainers.component';
import { ContactComponent } from './componet/contact/contact.component';
import { AdminDashBoardComponent } from './componet/admin-dash-board/admin-dash-board.component';
import { VideoComponent } from './componet/video/video.component';
import { ArrangeTheOnlineClassComponent } from './componet/arrange-the-online-class/arrange-the-online-class.component';
import { StudentProfileComponent } from './componet/student-profile/student-profile.component';
import { IncomeComponent } from './componet/income/income.component';
import { StudentDashBoradComponent } from './componet/student-dash-borad/student-dash-borad.component';



// import { HomeModule } from './home/home/home.module';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path: 'loginDashBorad' ,component: LoginDashBoradComponent},
  {path:'login', component: LoginComponent},
  {path:'singup', component: SignUpComponent},
  {path:'about', component: AboutComponent},
  {path:'courses', component: CoursesComponent},
  {path:'trainers', component: TrainersComponent },
  {path:'conact', component: ContactComponent },
  {path:'adminNav', component: AdminDashBoardComponent },
  {path:'video', component: VideoComponent },
  {path:'onlineClass', component: ArrangeTheOnlineClassComponent },
  {path:'studentProfile', component: StudentProfileComponent },
  {path:'income', component: IncomeComponent },
  {path:'stuNavBar', component: StudentDashBoradComponent },

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
