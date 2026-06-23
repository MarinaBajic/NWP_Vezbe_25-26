import { Injectable, signal } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  // private products: Array<Product> = Array();
  private products = signal<Array<Product>>([]);

  constructor(private http: HttpClient) {
    // this.products.push(new Product(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    // this.products.push(new Product(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    // this.products.push(new Product(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
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
