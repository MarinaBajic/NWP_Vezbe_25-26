import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductItem } from '../product-item/product-item';
import { ProductQuantityChange } from '../model/product-quantity-change';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Array<Product> = Array();

  ngOnInit() {
    this.products.push(new Product(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    this.products.push(new Product(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    this.products.push(new Product(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
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
