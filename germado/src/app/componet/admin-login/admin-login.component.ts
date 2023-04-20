import { Component } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {

  username=""
  password=""

  constructor(private service:GermadoService) {}

  tryLogin() {
    const res = this.service.adminLogin({ username: this.username, password: this.password });
  }

}
