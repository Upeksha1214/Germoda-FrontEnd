import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {
  
  url_signUp="http://localhost:8000/student/"
  url_studentLogin="http://localhost:8000/student/login"
  url_registerTheClass="http://localhost:8000/register"
  url_arrangeTheClass="http://localhost:8000/onlineClass"
  url_marks="http://localhost:8000/marks"


  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_signUp,data).subscribe()
  }
  
  studentLogin(data:any){
    return this.http.post(this.url_studentLogin,data).subscribe()
  }

  registerClass(data:any){
    return this.http.post(this.url_registerTheClass,data).subscribe()
  }

  arrangeTheClass(data:any){
    return this.http.post(this.url_arrangeTheClass,data).subscribe()
  }

  marks(data:any){
    return this.http.post(this.url_marks,data).subscribe()
  }
  
}
