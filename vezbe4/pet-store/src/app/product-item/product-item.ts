import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnInit {
  product!: Product;

  ngOnInit(): void {
    this.product = new Product(
      'Ball',
      9.99,
      'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg',
      false);
  }

  increaseQuantity(): void {
    this.product.quantityInCart++;
  }

  decreaseQuantity(): void {
    this.product.quantityInCart--;
  }

  canDecreaseQuantity(): boolean {
    return this.product.quantityInCart > 0;
  }
}
