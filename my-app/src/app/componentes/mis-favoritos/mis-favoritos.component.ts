import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ModalPoliticasComponent } from '../modal-politicas/modal-politicas.component';

@Component({
  selector: 'app-mis-favoritos',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ModalPoliticasComponent],
  templateUrl: './mis-favoritos.component.html',
  styleUrl: './mis-favoritos.component.css'
})
export class MisFavoritosComponent implements AfterViewInit {
  @ViewChild(ModalPoliticasComponent) modal!: ModalPoliticasComponent;

  ngAfterViewInit() {}

  abrirModal() {
    this.modal.openModal();
  }
}