import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalPoliticasComponent } from '../modal-politicas/modal-politicas.component';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModalPoliticasComponent],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export class PerfilComponent implements AfterViewInit {
  @ViewChild(ModalPoliticasComponent) modal!: ModalPoliticasComponent;

  ngAfterViewInit() {}

  abrirModal() {
    console.log("abrirModal1");
    this.modal.openModal();
  }

}
