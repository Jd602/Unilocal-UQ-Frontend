import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { OlvidarPasswordComponent } from './componentes/olvidar-password/olvidar-password.component';
import { N404Component } from './componentes/404/404.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,InicioComponent,LoginComponent,RegistroComponent,OlvidarPasswordComponent,N404Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
