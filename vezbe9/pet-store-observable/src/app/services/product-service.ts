import { Injectable } from '@angular/core';
import { Product } from '../model/product';
import { ProductQuantityChange } from '../model/product-quantity-change';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Array<Product> = Array();

  constructor() {
    this.products.push(new Product(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    this.products.push(new Product(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    this.products.push(new Product(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
  }

  getProducts(): Observable<Array<Product>> {
    return of(this.products);
  }

  getProduct(id: number): Product | undefined {
    let product = this.products.find((prod) => {
      return prod.id === id;
    })

    return product;
  }

  changeQuantity(productQuantityChange: ProductQuantityChange): Observable<Product> {
    let productToChange = this.getProduct(productQuantityChange.product.id);

    return new Observable(observer => {
      if (!productToChange) {
        observer.error("Product with given id doesn't exist!");
      } else {
        productToChange.quantityInCart += productQuantityChange.amountToChange;
        observer.next(productToChange);
      }
      observer.complete();
    });
  }

  addProduct(product: Product): Observable<Product> {
    let productClone: Product = Object.assign({}, product);
    productClone.id = this.products.length + 1;
    productClone.quantityInCart = 0;
    this.products.push(productClone);
    return of(productClone);
  }
}
