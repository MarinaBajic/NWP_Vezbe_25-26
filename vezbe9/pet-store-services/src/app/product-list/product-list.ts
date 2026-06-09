import { Component, inject, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-product-list',
  imports: [Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Array<ProductModel> = Array();

  private productService = inject(ProductService);

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    this.productService.changeQuantity(productQuantityChange);
  }
}
