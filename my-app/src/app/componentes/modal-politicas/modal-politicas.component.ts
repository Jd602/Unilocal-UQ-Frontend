import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-politicas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-politicas.component.html',
  styleUrls: ['./modal-politicas.component.css']
})
export class ModalPoliticasComponent {
  showModal = false;

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
