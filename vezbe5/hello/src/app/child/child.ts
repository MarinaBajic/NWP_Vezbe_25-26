import { CommonModule, DatePipe } from '@angular/common';
import { Component, input, output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [DatePipe, CommonModule],
  templateUrl: './child.html',
  styleUrl: './child.css',
})
export class Child {
  name = input<string>("Marinaa");
  date: number = Date.now()

  sayHelloEvent = output<string>();

  sayHello() {
    // alert(`Hello, ${this.name()}`);
    this.sayHelloEvent.emit(this.name());
  }
}
