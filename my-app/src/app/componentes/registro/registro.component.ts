import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OlvidarPasswordComponent } from '../olvidar-password/olvidar-password.component';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,OlvidarPasswordComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  /* registroClienteDTO: RegistroClienteDTO;
 constructor() {
 this.registroClienteDTO = new RegistroClienteDTO();
 }  */
 
}


