import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddProfile } from './add-profile/add-profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AddProfile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('hello');
}
