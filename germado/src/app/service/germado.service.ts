import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {

  url_root="http://localhost:3000/"
  
  url_signUp=this.url_root+"api/student"
  url_adminLogin=this.url_root+"auth/admin/login"
  url_studentLogin="http://localhost:8000/student/login"
  url_registerTheClass=this.url_root+"api/registration"
  url_arrangeTheClass=this.url_root+"api/online-class"
  url_marks=this.url_root+"api/marks"
  url_inquiry=this.url_root+"api/inquiry"


  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_signUp,{student:{...data}}).subscribe()
  }
   getAllStudent(){
    return this.http.get(this.url_signUp,{headers:{Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVwZWtzaGEyMSIsInN1YiI6IjY0MDZjMWJmNWQ3ODNlMzRjYWViMjYzNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODE3MDYyOH0.qpD4qEjz0GfQaPNNhR7_5ci5JV9oQ_u1JThI0X8rPkQ" }})
  }

  adminLogin(data:any){
    return this.http.post(this.url_adminLogin,{username:data.username , password:data.password}).subscribe(d => { this.handleAdminLogin(d) });
  }

  studentLogin(data:any){
    return this.http.post(this.url_studentLogin,data,).subscribe()
  }

  handleAdminLogin(data:any) {
    if (data?.access_token) {
      localStorage.setItem('germoda-token', data.access_token);
      location.replace('/adminNav')
    }
  }

  registerClass(data:any){
    return this.http.post(this.url_registerTheClass,{registration:{...data}}).subscribe()
  }

  registedClathissAllStudent(){
    return this.http.get(this.url_registerTheClass,{headers:{Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVwZWtzaGEyMSIsInN1YiI6IjY0MDZjMWJmNWQ3ODNlMzRjYWViMjYzNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODE3MDYyOH0.qpD4qEjz0GfQaPNNhR7_5ci5JV9oQ_u1JThI0X8rPkQ" }})
  }

//---------------------------online class start-------------------------------------------
  arrangeTheClass(data:any){
    return this.http.post(this.url_arrangeTheClass,{onlineClass:{...data}}).subscribe()
  }

  arrangeAllclass(){
    return this.http.get(this.url_arrangeTheClass,{headers:{Authorization : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVwZWtzaGEyMSIsInN1YiI6IjY0MDZjMWJmNWQ3ODNlMzRjYWViMjYzNyIsInJvbGUiOiJhZG1pbiIsImlhdCI6MTY3ODE3MDYyOH0.qpD4qEjz0GfQaPNNhR7_5ci5JV9oQ_u1JThI0X8rPkQ" }})
  }

  arrangeClasseUpdate(data:any){
    return this.http.patch(this.url_arrangeTheClass+"/"+data._id,{data}, { headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('germoda-token') } }).subscribe()
  }

  arrangeClassDelete(data:any){
    return this.http.delete(this.url_arrangeTheClass+"/"+data._id,{ headers: { 'Authorization' : 'Bearer '+ localStorage.getItem('germoda-token') } })
  }

  //---------------------------online class end-------------------------------------------
  marks(data:any){
    return this.http.post(this.url_marks,data).subscribe()
  }
  
  ininquiryAdding(data:any){
    return this.http.post(this.url_inquiry,{inquiry:{...data}}).subscribe()
  }
}
