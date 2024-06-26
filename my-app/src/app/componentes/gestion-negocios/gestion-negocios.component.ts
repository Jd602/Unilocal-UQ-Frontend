import { Component } from '@angular/core';
import { ItemNegocioDTO } from '../../dto/item-negocio-dto';
import { NegociosService } from '../../servicios/negocios';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-gestion-negocios',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './gestion-negocios.component.html',
  styleUrl: './gestion-negocios.component.css',
})

export class GestionNegociosComponent {
  negocios: ItemNegocioDTO[];
  seleccionados:ItemNegocioDTO[];
  textoBtnEliminar: string;

  constructor(private negocioService: NegociosService) {
    this.negocios = [];
    this.seleccionados =[];
    this.listarNegocios();
    this.textoBtnEliminar="";
  }
  public listarNegocios() {
    this.negocios = this.negocioService.listar();
  }

  public seleccionar(producto: ItemNegocioDTO, estado: boolean) {
    if (estado) {
    this.seleccionados.push(producto);
    } else {
    this.seleccionados.splice( this.seleccionados.indexOf(producto), 1 );
    }
    this.actualizarMensaje();
   }
  actualizarMensaje() {
    throw new Error('Method not implemented.');
  }
   public borrarNegocios() {
    this.seleccionados.forEach(n => {
    this.negocioService.eliminar(n.codigoNegocio);
    this.negocios = this.negocios.filter(negocio => negocio.codigoNegocio !== n.codigoNegocio);
    });
    this.seleccionados = [];
    this.actualizarMensaje();
    }





  }

  
