import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private service:GermadoService){}


  saveData={
    studentId:""
  }

  inputChange(student:any){
    console.log(student)
  }

  onSubmit(signUp:NgForm){
    console.log(this.saveData.studentId)
    
    

    this.service.registerStudent(this.saveData)
  }
  
}
