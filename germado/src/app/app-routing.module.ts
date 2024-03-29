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
import { RegisterClassComponent } from './componet/register-class/register-class.component';
import { StudentViewVideosComponent } from './componet/student-view-videos/student-view-videos.component';
import { StuViewFashionBlocksComponent } from './componet/stu-view-fashion-blocks/stu-view-fashion-blocks.component';
import { ClassSheduleComponent } from './componet/class-shedule/class-shedule.component';
import { AdminLoginComponent } from './componet/admin-login/admin-login.component';
import { CourseAddingComponent } from './componet/course-adding/course-adding.component';
import { PaymentLoginComponent } from './componet/payment-login/payment-login.component';
import { PaymentComponent } from './componet/payment/payment.component';
import { MarksComponent } from './componet/marks/marks.component';
import { InquiryComponent } from './componet/inquiry/inquiry.component';



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
  {path:'registerClass', component: RegisterClassComponent },
  {path:'viewVideo', component: StudentViewVideosComponent },
  {path:'fashionBlocks', component: StuViewFashionBlocksComponent },
  {path:'classShedule', component: ClassSheduleComponent },
  {path:'adminLogin', component: AdminLoginComponent},
  {path:'courseAdding', component: CourseAddingComponent},
  {path:'paymentLogin', component: PaymentLoginComponent},
  {path:'payment', component: PaymentComponent},
  {path:'marks',component:MarksComponent},
  {path:'inquiry',component:InquiryComponent}

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
