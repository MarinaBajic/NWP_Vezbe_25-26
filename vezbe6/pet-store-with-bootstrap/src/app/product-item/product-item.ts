import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnInit {

  product = input<Product>(new Product(0, '', 0, '', false));

  changeQuantityEvent = output<{ product: Product, increase: boolean }>();

  productClasses!: { [key: string]: boolean }
  productStyles!: { [key: string]: string }

  ngOnInit(): void {
    this.productClasses = {
      'on-sale': this.product().isOnSale
    }
    this.productStyles = {
      'font-size': this.product().isOnSale ? "36px" : "28px"
    }
  }

  increaseQuantity(): void {
    // this.product().quantityInCart++;
    this.changeQuantityEvent.emit({product: this.product(), increase: true});
  }

  decreaseQuantity(): void {
    // this.product().quantityInCart--;
    this.changeQuantityEvent.emit({product: this.product(), increase: false});
  }

  canDecreaseQuantity(): boolean {
    return this.product().quantityInCart > 0;
  }

}
