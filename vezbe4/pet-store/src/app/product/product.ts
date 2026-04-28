import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  product!: ProductModel;

  ngOnInit(): void {
    this.product = new ProductModel(
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
