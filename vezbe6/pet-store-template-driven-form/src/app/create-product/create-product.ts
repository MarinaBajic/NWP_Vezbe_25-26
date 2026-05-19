import { Component } from '@angular/core';
import { Product } from '../model/product';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'forma',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  product: Product = new Product('', '#', 0, 'new');
  confirmed: boolean = false;

  nameToUppercase(name: string) {
    this.product.name = name.toUpperCase();
  }

  submit(forma: NgForm) {
    console.log(forma.value);
    console.log(this.product);
  }

  reset() {
    this.product = new Product('', '#', 0, 'new');
    console.log(this.product);
    this.confirmed = false;
  }
}
