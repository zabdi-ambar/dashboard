import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-producto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-producto.html',
  styleUrls: ['./card-producto.css']
})
export class CardProductoComponent {
  @Input() nombre!: string;
  @Input() precio!: number;
  @Input() oferta!: boolean;
}
