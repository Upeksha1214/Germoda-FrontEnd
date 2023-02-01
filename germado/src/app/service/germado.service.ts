import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {

  url_register=environment['url_register'] ?? ""


  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_register,data).subscribe()
  }
}
