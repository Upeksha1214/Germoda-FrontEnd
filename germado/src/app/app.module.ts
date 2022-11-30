import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componet/login/login.component';
import { NavbarComponent } from './componet/navbar/navbar.component';
import { SignUpComponent } from './componet/sign-up/sign-up.component';
import { AdminDashBoardComponent } from './componet/admin-dash-board/admin-dash-board.component';
import { VideoComponent } from './componet/video/video.component';
import { ArrangeTheOnlineClassComponent } from './componet/arrange-the-online-class/arrange-the-online-class.component';
import { IncomeComponent } from './componet/income/income.component';
import { StudentRegistrationComponent } from './componet/student-registration/student-registration.component';
import { StudentDashBoradComponent } from './componet/student-dash-borad/student-dash-borad.component';
import { ClassSheduleComponent } from './componet/class-shedule/class-shedule.component';
import { OnlineClassComponent } from './componet/online-class/online-class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

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
    StudentDashBoradComponent,
    ClassSheduleComponent,
    OnlineClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
