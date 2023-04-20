import { Component } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';
import { NgForm } from '@angular/forms';
import IMeeting from 'src/interfaces/meeting.interface';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-arrange-the-online-class',
  templateUrl: './arrange-the-online-class.component.html',
  styleUrls: ['./arrange-the-online-class.component.css']
})
export class ArrangeTheOnlineClassComponent {

  simpleAlert(){
    Swal.fire("Success")
  }

  allclasses:any;

  constructor(private service:GermadoService){}

  saveData:IMeeting={
      className: "",
      duration: 0,
      date: "",
      fee: 0,
      time: "",
      meetingUrlId:"",
      meetingTitle: "",
  }


  meetingTitle=''
  addTitle(meetingTitle:string){
    this.saveData.meetingTitle=meetingTitle
    this.saveData.meetingUrlId=meetingTitle.split(" ").join('-') + parseInt((Math.random() * 1000).toString())
  }

  inputChange(onlineClass:any){
    console.log(onlineClass)
  }


  onSubmit(arrangeTheClass:NgForm){
    this.addTitle(this.meetingTitle)
    this.service.arrangeTheClass(this.saveData)
  }


  ngOnInit(){
    this.service.arrangeAllclass().subscribe(data=>{this.allclasses=data; console.log(data)})
  }

  startUpdateOnline(classData:IMeeting){
    this.meetingTitle=classData.meetingTitle
    this.saveData=classData;
  }

  updateMeeting(){
    this.service.arrangeClasseUpdate(this.saveData)
  }

  deleteMeeting(){
    this.service.arrangeClassDelete(this.saveData).subscribe((data:any)=>{if (data?.deletedCount > 0) {this.simpleAlert(); }})
  }
}

