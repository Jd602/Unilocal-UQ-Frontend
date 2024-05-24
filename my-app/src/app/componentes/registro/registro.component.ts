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

  constructor(/* private publicoService: PublicoService, private authService: AuthService */) {
  this.registroClienteDTO = new RegistroClienteDTO();
  this.ciudades = [];
  /* this.cargarCiudades(); */
  this.alerta = new Alerta("","");
  }

  public registrar() {

    console.log("Creado");
    console.log(this.registroClienteDTO.email);

    /* if (this.registroClienteDTO.fotoPerfil != "") {
      this.authService.registrarCliente(this.registroClienteDTO).subscribe({
      next: (data) => {
      this.alerta = new Alerta(data.respuesta, "success");
      },
      error: (error) => {
      this.alerta = new Alerta(error.error.respuesta, "danger");
      }
      });
      } else {
      this.alerta = new Alerta("Debe subir una imagen", "danger");
      } */
    }
    public sonIguales(): boolean {
      return this.registroClienteDTO.password == this.registroClienteDTO.confirmarPassword;
    }

    /* private cargarCiudades() {
      this.publicoService.listarCiudades().subscribe({
      next: (data) => {
      this.ciudades = data.respuesta;
      },
      error: (error) => {
      console.log("Error al cargar las ciudades");
      }
      }); */

      /* public onFileChange(event: any) {
          if (event.target.files.length > 0) {
            this.archivos = event.target.files;
            this.registroClienteDTO.fotoPerfil = this.archivos[0].name;
          }
        } */



      }
    //}
  
    







