import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {
  name!: string;
  price!: number;
  imageUrl!: string;
  isOnSale: boolean = true;
  quantityInCart: number = 0;

  ngOnInit(): void {
    this.name = 'Ball';
    this.price = 9.99;
    this.imageUrl = 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg'; // Placeholder image URL
  }

  increaseQuantity(): void {
    this.quantityInCart++;
  }

  decreaseQuantity(): void {
    this.quantityInCart--;
  }

  canDecreaseQuantity(): boolean {
    return this.quantityInCart > 0;
  }
}
