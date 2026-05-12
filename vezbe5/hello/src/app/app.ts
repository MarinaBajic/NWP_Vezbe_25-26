import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Child } from './child/child';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Child],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // numbers: number[] = [1, 2, 3];
  imena: string[] = ["Marina", "Aleksandra", "Milica"];

  sayHelloFromApp(ime: string) {
    alert(`Hello, ${ime}, from parent component!`);
  }
}
