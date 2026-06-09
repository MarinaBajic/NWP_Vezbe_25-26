import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductList } from './product-list/product-list';
import { CreateProduct } from './create-product/create-product';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductList, CreateProduct],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pet-store-base');
}
