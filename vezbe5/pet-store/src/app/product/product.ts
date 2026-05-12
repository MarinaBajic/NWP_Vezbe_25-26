import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, input, OnInit, output } from '@angular/core';
import { ProductModel } from '../model/product-model';

@Component({
  selector: 'app-product',
  imports: [CurrencyPipe, CommonModule],
  templateUrl: './product.html',
  styleUrl: './product.css',
})
export class Product implements OnInit {

  product = input<ProductModel>(new ProductModel(0, '', 0, '', false));

  changeQuantityEvent = output<{ product: ProductModel, increase: boolean }>();

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
