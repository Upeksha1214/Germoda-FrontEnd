import { Component } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-arrange-the-online-class',
  templateUrl: './arrange-the-online-class.component.html',
  styleUrls: ['./arrange-the-online-class.component.css']
})
export class ArrangeTheOnlineClassComponent {

  constructor(private service:GermadoService){}

  saveData={
      classId: "",
      className: "",
      duration: "",
      date: "",
      fee: "",
      time: "",
      meetingUrlId:"",
  }


  meetingTitle=''
  addTitle(meetingTitle:string){
    this.saveData.meetingUrlId=meetingTitle.split(" ").join('-') + parseInt((Math.random() * 1000).toString())
  }

  inputChange(onlineClass:any){
    console.log(onlineClass)
  }

  onSubmit(arrangeTheClass:NgForm){
    this.service.arrangeTheClass(this.saveData)
  }
}
