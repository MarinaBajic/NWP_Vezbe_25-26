import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductItem } from './product-item/product-item';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductItem],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pet-store');
}
