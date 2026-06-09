import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductItem } from '../product-item/product-item';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList implements OnInit {

  products: Array<Product> = Array();
  sumProductsInCart: number = 0;
  totalPrice: number = 0;

  ngOnInit() {
    this.products.push(new Product(1, 'Ball', 9.99, 'https://images.pexels.com/photos/27408124/pexels-photo-27408124.jpeg', false));
    this.products.push(new Product(2, "Elephant", 10.99, "https://images.unsplash.com/photo-1591946614720-90a587da4a36", true));
    this.products.push(new Product(3, "Mouse", 8.99, "https://images.unsplash.com/photo-1545249390-6bdfa286032f", false));
  }

  changeQuantity({ product, increase }: { product: Product; increase: boolean }) {
    let productToChange = this.products.find((prod) => {
      return prod.id === product.id;
    })

    if (productToChange) {
      if (increase) {
        productToChange.quantityInCart++;
        this.sumProductsInCart++;
        this.totalPrice += product.price;
      } else {
        productToChange.quantityInCart--;
        this.sumProductsInCart--;
        this.totalPrice -= product.price;
      }
    }
    else {
      console.log("Something strange happened :(");
    }
  }
}
