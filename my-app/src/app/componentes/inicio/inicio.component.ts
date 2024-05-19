import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegistroComponent } from '../registro/registro.component';
import { ModalPoliticasComponent } from '../modal-politicas/modal-politicas.component';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, RouterOutlet, LoginComponent, RegistroComponent, ModalPoliticasComponent],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements AfterViewInit {
  @ViewChild(ModalPoliticasComponent) modal!: ModalPoliticasComponent;

  ngAfterViewInit() {}

  abrirModal() {
    this.modal.openModal();
  }
}
