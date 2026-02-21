import { Component, Input } from '@angular/core';
import { Product } from '../../models/producto.model';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  templateUrl: './producto-card.html',
  styleUrls: ['./producto-card.css'],
})

export class ProductCardComponent{
    @Input() product!: Product;
}