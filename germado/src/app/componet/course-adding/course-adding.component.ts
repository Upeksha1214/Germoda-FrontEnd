import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { GermadoService } from 'src/app/service/germado.service';
import ICourse from 'src/interfaces/course.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-course-adding',
  templateUrl: './course-adding.component.html',
  styleUrls: ['./course-adding.component.css']
})
export class CourseAddingComponent {

  simpleAlert(){
    Swal.fire("Success")
  }


  constructor(private service:GermadoService){}

  allCorse:any;

  
  saveData: ICourse={
    
    courseId: '',
    courseName: '',
    courseCategory: '',
    courseContanet: '',
    courseDuration: '',
    courseFee: 0,
    courseDiscount: 0
  }

  inputChange(course:any){
    console.log(course)
  }

  onSubmit(coursesAdding:NgForm){
    this.service.coursesAdding(this.saveData)
  }
  
  ngOnInit(){
    console.log("hello world")
    this.service.allCourses().subscribe(data=>{this.allCorse=data;console.log(data)})
  }

  startCourseUpdating(courseData:ICourse){
    this.saveData=courseData;
  }

  updateCourse(){
    this.service.courseUpated(this.saveData)
  }

  deleteCourse(){
    this.service.courseDelete(this.saveData).subscribe((data:any)=>{if(data.deletedCount>0){this.simpleAlert()}})
  }
}
