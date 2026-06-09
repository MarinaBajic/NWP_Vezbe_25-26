import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductItem } from '../product-item/product-item';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Array<Product> = Array();

  private productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    this.productService.changeQuantity(productQuantityChange);
  }
}
