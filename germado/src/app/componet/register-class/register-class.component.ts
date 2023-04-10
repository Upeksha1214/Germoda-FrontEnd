import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';

@Component({
  selector: 'app-register-class',
  templateUrl: './register-class.component.html',
  styleUrls: ['./register-class.component.css']
})
export class RegisterClassComponent {


  constructor(private service:GermadoService){}

  saveData={
    registerId:"",
    registerDate:"",
    studentId:"",
    registerTime:"",
    payment:"",

  }
  
  inputChange(register:any){
    console.log(register)
  }
  
  onSubmit(registerClass:NgForm){
    this.service.registerClass(this.saveData)
  }
}
