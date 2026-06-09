import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductItem } from '../product-item/product-item';
import { AsyncPipe } from '@angular/common';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product-service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, AsyncPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products!: Observable<Array<Product>>;

  private productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    this.productService.changeQuantity(productQuantityChange).subscribe({
      next: (product) => {
        console.log("Quantity changed for product id: " + product.id);
      },
      error: (err) => {
        console.log("Error changing quantity: " + err);
      }
    });
  }
}
