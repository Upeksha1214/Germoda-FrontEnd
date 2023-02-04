import { Component, OnInit } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';
import { HttpClient } from '@angular/common/http';
import { Router, Route } from '@angular/router';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  action() {
    alert("hello world")
 }

 isFormInvalid = false;

  email_Validation = false;
  password_Validation = false;

  constructor(private docService: GermadoService , private http: HttpClient, private router:Router) { }

  ngOnInit(): void {

  }

  Form() {
    this.email_Validation = false;
    this.password_Validation = false
  }

  onsubmit(loginForm: NgForm){

    this.docService.studentLogin(loginForm.value)

      .subscribe(response => {
        if (response == '0') {
          this.email_Validation = true;
        }

        else if (response == '1') {
          this.password_Validation = true;
        }

        else if(response == '2') {
          this.router.navigate(['/'])
        }
      })
  } 



}
