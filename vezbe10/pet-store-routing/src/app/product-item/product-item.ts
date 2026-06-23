import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-item',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem implements OnInit {

  product = input<Product>(new Product(0, '', 0, '', false));

  changeQuantityEvent = output<ProductQuantityChange>();

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
    this.changeQuantityEvent.emit({product: this.product(), amountToChange: 1});
  }

  decreaseQuantity(): void {
    this.changeQuantityEvent.emit({product: this.product(), amountToChange: -1});
  }

  canDecreaseQuantity(): boolean {
    return this.product().quantityInCart > 0;
  }

}
