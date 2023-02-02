import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class GermadoService {

<<<<<<< HEAD
  url_register="http://localhost:8000/student/"
=======
  url_register=environment['url_register'] ?? ""
>>>>>>> d015b7f49f209bb75114ab7fe87a0ee35cfd0aff


  constructor(private http:HttpClient) {}

  registerStudent(data:any){
    return this.http.post(this.url_register,data).subscribe()
  }
}
