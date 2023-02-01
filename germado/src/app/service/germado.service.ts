import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {

  url_register=process.env['url_register'] ?? ""


  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_register,data).subscribe()
  }
}
