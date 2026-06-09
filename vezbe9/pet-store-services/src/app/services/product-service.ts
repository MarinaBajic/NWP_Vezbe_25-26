import { Injectable } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

  private products: Array<ProductModel> = Array();

  constructor() {
    this.products.push(new ProductModel(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    this.products.push(new ProductModel(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    this.products.push(new ProductModel(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
  }

  getProducts(): Array<ProductModel> {
    return this.products;
  }

  getProduct(id: number): ProductModel | undefined {
    let product = this.products.find((prod) => {
      return prod.id === id;
    })

    return product;
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    let productToChange = this.getProduct(productQuantityChange.product.id);

    if (productToChange) {
      productToChange.quantityInCart += productQuantityChange.amountToChange;
    }
    else {
      console.log("Something strange happened :(");
    }
  }

  addProduct(product: ProductModel) {
    let productClone: ProductModel = Object.assign({}, product);
    productClone.id = this.products.length + 1;
    productClone.quantityInCart = 0;
    this.products.push(productClone);
  }
}
