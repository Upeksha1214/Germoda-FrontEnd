import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';

@Component({
  selector: 'app-inquiry',
  templateUrl: './inquiry.component.html',
  styleUrls: ['./inquiry.component.css']
})
export class InquiryComponent {

  constructor(private service:GermadoService){}
  
  saveData={
    inquiryId:"",
    inquiry:"",
    studenetId:"",
    description:"",
    email:"",
  }

  inputChange(inquiry:any){
    console.log(inquiry)
  }

  onSubmit(inquiry:NgForm){
    
    this.service.ininquiryAdding(this.saveData)
  }

}
