import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mis-favoritos',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './mis-favoritos.component.html',
  styleUrl: './mis-favoritos.component.css'
})
export class MisFavoritosComponent {

}
