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
  product: Product = new Product('', '', '#', 0, 'new');

  defaultType: string;
  manufacturers: string[];

  constructor() {
    this.defaultType = 'new';
    this.manufacturers = [
      'PawTech',
      'FurHaven',
      'PetNova',
      'TailTrail',
      'WhiskerWorks'
    ]
  }

  nameToUppercase(name: string) {
    this.product.name = name?.toUpperCase();
  }

  submit(forma: NgForm) {
    if (forma.invalid) {
      return;
    }
    alert("Form submitted successfully!")
    this.product.type = forma.value.osnovneInformacije.tip
    console.log(forma.value);
    console.log(this.product);
  }

  reset(forma: NgForm) {
    forma.reset()
  }
}
