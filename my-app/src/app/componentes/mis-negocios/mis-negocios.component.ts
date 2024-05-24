import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalPoliticasComponent } from '../modal-politicas/modal-politicas.component';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from '../perfil/perfil.component';

@Component({
  selector: 'app-mis-negocios',
  standalone: true,
  imports: [RouterOutlet, ModalPoliticasComponent, CommonModule, PerfilComponent],
  templateUrl: './mis-negocios.component.html',
  styleUrls: ['./mis-negocios.component.css']
})
export class MisNegociosComponent implements AfterViewInit {
  @ViewChild(ModalPoliticasComponent) modal!: ModalPoliticasComponent;

  ngAfterViewInit() {}

  abrirModal() {
    console.log("abrirModal");
    this.modal.openModal();
  }

}
