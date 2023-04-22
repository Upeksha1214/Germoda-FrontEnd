import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';
import IMarks from 'src/interfaces/marks.interface';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  
  constructor(private service:GermadoService ){}

  saveData:IMarks={
    
    inquiryId: '',
    marks: 0,
    className: '',
    grade: '',
    studentId: '',
    status: ''
  }

  inputChange(marks:any){
    console.log(marks)

  }

  onSubmit(marks:NgForm){
    this.service.marksAdding(this.saveData)
  }
  
}
