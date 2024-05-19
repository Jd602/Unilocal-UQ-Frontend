import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { OlvidarPasswordComponent } from '../olvidar-password/olvidar-password.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet,RegistroComponent,OlvidarPasswordComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}
 