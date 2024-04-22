import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';

@Component({
  selector: 'app-404',
  standalone: true,
  imports: [RouterOutlet,InicioComponent],
  templateUrl: './404.component.html',
  styleUrl: './404.component.css'
})
export class N404Component {

}
 