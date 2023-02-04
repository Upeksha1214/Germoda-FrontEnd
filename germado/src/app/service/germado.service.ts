import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {
  
  url_register="http://localhost:8000/student/"
  url_studentLogin="http://localhost:8000/student/login"

  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_register,data).subscribe()
  }
  
  studentLogin(data:any){
    return this.http.post(this.url_studentLogin,data).subscribe()
  }
}
