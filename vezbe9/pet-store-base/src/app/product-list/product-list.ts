import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../model/product-model';
import { Product } from '../product/product';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  imports: [Product],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Array<ProductModel> = Array();

  ngOnInit() {
    this.products.push(new ProductModel(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    this.products.push(new ProductModel(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    this.products.push(new ProductModel(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
  }

  changeQuantity(productQuantityChange: ProductQuantityChange) {
    let productToChange = this.products.find((prod) => {
      return prod.id === productQuantityChange.product.id;
    })

    if (productToChange) {
      productToChange.quantityInCart += productQuantityChange.amountToChange;
    }
    else {
      console.log("Something strange happened :(");
    }
  }
}
