import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [DatePipe],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name: string = "Marinaa";
  date: number = Date.now()

  sayHello() {
    alert(`Hello, ${this.name}`);
  }
}
