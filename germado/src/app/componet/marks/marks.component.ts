import { Component } from '@angular/core';
import { GermadoService } from 'src/app/service/germado.service';

@Component({
  selector: 'app-marks',
  templateUrl: './marks.component.html',
  styleUrls: ['./marks.component.css']
})
export class MarksComponent {
  constructor(private service:GermadoService ){}

  
}
