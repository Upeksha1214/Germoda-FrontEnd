import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule , routingComponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componet/login/login.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { SignUpComponent } from './componet/sign-up/sign-up.component';
import { AdminDashBoardComponent } from './componet/admin-dash-board/admin-dash-board.component';
import { VideoComponent } from './componet/video/video.component';
import { ArrangeTheOnlineClassComponent } from './componet/arrange-the-online-class/arrange-the-online-class.component';
import { IncomeComponent } from './componet/income/income.component';
import { StudentRegistrationComponent } from './componet/student-registration/student-registration.component';
import { ClassSheduleComponent } from './componet/class-shedule/class-shedule.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './componet/home/home.component';
import { LoginDashBoradComponent } from './componet/login-dash-borad/login-dash-borad.component';
import { AboutComponent } from './componet/about/about.component';
import { TrainersComponent } from './componet/trainers/trainers.component';
import { CoursesComponent } from './componet/courses/courses.component';
import { ContactComponent } from './componet/contact/contact.component';
import { StudentProfileComponent } from './componet/student-profile/student-profile.component';
import { RegisterClassComponent } from './componet/register-class/register-class.component';
import { StudentViewVideosComponent } from './componet/student-view-videos/student-view-videos.component';
import { StuViewFashionBlocksComponent } from './componet/stu-view-fashion-blocks/stu-view-fashion-blocks.component';
import { StudentDashBoradComponent } from './componet/student-dash-borad/student-dash-borad.component';
import { AdminLoginComponent } from './componet/admin-login/admin-login.component';
import { CourseAddingComponent } from './componet/course-adding/course-adding.component';
// import { HomeModule } from './home/home/home.module';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    SignUpComponent,
    AdminDashBoardComponent,
    VideoComponent,
    ArrangeTheOnlineClassComponent,
    IncomeComponent,
    StudentRegistrationComponent,
    ClassSheduleComponent,
    HomeComponent,
    
    LoginDashBoradComponent,
    AboutComponent,
    TrainersComponent,
    CoursesComponent,
    ContactComponent,
    StudentProfileComponent,
    RegisterClassComponent,
    StudentViewVideosComponent,
    StuViewFashionBlocksComponent,
    
    StudentDashBoradComponent,
          AdminLoginComponent,
          CourseAddingComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    // HomeModule
  ],
  exports: [
   NavbarComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
