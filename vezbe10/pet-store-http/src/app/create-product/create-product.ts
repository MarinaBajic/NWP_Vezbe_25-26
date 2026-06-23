import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Product } from '../model/product';
import { ProductService } from '../services/product-service';

@Component({
  selector: 'app-create-product',
  imports: [FormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct {
  public message = '';
  private productService = inject(ProductService);

  createProduct(productForm: NgForm) {
    if (productForm.invalid) {
      this.message = 'Please correct all errors and resubmit the form';
      return;
    }
    this.message = '';
    const product: Product = productForm.value.product;
    console.log('Creating product', product);

    this.productService.addProduct(product).subscribe({
      next: () => {
        this.productService.loadProducts()
        console.log(`Product created successfully!`);
        productForm.reset();
      }
    });
  }
}
