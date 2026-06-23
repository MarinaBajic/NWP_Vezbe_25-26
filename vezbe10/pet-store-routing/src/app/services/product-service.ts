import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products = signal<Array<Product>>([]);

  constructor(private http: HttpClient) {
    this.loadProducts()
  }

  loadProducts() {
    this.http.get<Array<Product>>('api/product')
      .subscribe(productsList => {
        this.products.set(productsList)
      })
  }

  get getProducts() {
    return this.products;
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    return this.http.patch(`api/product/${productQuantityChange.product.id}`, { changeInQuantity: productQuantityChange.amountToChange });
  }

  addProduct(product: Product) {
    return this.http.post<Product>("api/product", product);
  }
}
