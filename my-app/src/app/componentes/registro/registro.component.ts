import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { OlvidarPasswordComponent } from '../olvidar-password/olvidar-password.component';
/* import { PublicoService } from '../../servicios/publico.service';
import { AuthService } from '../../../servicios/auth.service'; */
import { FormsModule } from '@angular/forms';
import { AlertaComponent } from '../alerta/alerta.component';
import { Alerta } from '../../dto/alerta';

import { RegistroClienteDTO } from '../../dto/registro-cliente-dto';
import { UserService } from '../../servicios/controllers/user.service';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [RouterOutlet,LoginComponent,OlvidarPasswordComponent, FormsModule, AlertaComponent],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})

export class RegistroComponent {
  registroClienteDTO: RegistroClienteDTO;
  ciudades: string[];
  archivos!:FileList;
  alerta!:Alerta;

  constructor(private userService:UserService) {
  this.registroClienteDTO = new RegistroClienteDTO();
  this.ciudades = [];
  /* this.cargarCiudades(); */
  this.alerta = new Alerta("","");
  }

  public registrar() {

    console.log("Ingresa a registro");
    console.log(this.registroClienteDTO.email);

    if (this.registroClienteDTO.fotoPerfil != "") {
      this.userService.registerUser(this.registroClienteDTO).subscribe({
      next: (data) => {
      this.alerta = new Alerta(data.respuesta, "success");
      console.log("Registro exitoso",data)
      },
      error: (error) => {
      this.alerta = new Alerta(error.error.respuesta, "danger");
      }
      });
      } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
      }
    }
    public sonIguales(): boolean {
      return this.registroClienteDTO.password == this.registroClienteDTO.confirmarPassword;
    }

    

      public onFileChange(event: any) {
          if (event.target.files.length > 0) {
            this.archivos = event.target.files;
            this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
          }
        }



      }
    
  
    







