import { Component } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {

  allStudent:any;

  constructor(private service:GermadoService){}


  ngOnInit(){
    this.service.getAllStudent().subscribe(data=>{this.allStudent=data;console.log(data)})
  }

}
