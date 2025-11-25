import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProductoComponent } from '../card-producto/card-producto';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CardProductoComponent],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class DashboardComponent {
  productos = [
    { nombre: 'Jugador de portátil', precio: 15000, oferta: true },
    { nombre: 'Teclado mecánico', precio: 2500, oferta: true },
    { nombre: 'PC Gamer', precio: 6200, oferta: true },
    { nombre: 'Ratón Inalámbrico', precio: 450, oferta: true }
  ];
}
