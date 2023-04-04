import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {

  simpleAlert(){
    Swal.fire("Success")
  }

  constructor(private service:GermadoService){}

  

  saveData={
    studentId:"",
    studentName:"",
    email:"",
    password:"",
    address:"",
    nic:"",
    gender:"",
    birthday:"",
    courseName:"",
    courseDuration:"",
    olResult:"",
    alResult:"",
    country:"",
    state:"",
     
  }

  inputChange(student:any){
    console.log(student)
  }

  onSubmit(signUp:NgForm){
    console.log(this.saveData.studentId)
    
    this.service.registerStudent(this.saveData)
  }
  
}
