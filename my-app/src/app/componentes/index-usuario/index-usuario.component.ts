import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ModalPoliticasComponent } from '../modal-politicas/modal-politicas.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-index-usuario',
  standalone: true,
  imports: [RouterOutlet, ModalPoliticasComponent, CommonModule],
  templateUrl: './index-usuario.component.html',
  styleUrls: ['./index-usuario.component.css']
})
export class IndexUsuarioComponent implements AfterViewInit {
  @ViewChild(ModalPoliticasComponent) modal!: ModalPoliticasComponent;

  ngAfterViewInit() {}

  abrirModal() {
    console.log("abrirModal1");
    this.modal.openModal();
  }

}
