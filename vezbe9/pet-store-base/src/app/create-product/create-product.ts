import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  public message = '';

  createProduct(productForm: NgForm) {
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
      return;
    }
    this.message = '';
    alert("Form submitted successfully!")
    console.log(productForm.value);
  }
}
