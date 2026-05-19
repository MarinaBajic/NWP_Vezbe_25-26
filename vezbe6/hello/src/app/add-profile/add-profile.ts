import { Component } from '@angular/core';
import { Person } from '../model/person';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-profile',
  imports: [FormsModule, JsonPipe],
  templateUrl: './add-profile.html',
  styleUrl: './add-profile.css',
})
export class AddProfile {
  profile: Person = new Person('Pera', 'Peric', 'peki', 'peki123');

  onSubmit(form: NgForm) {
    this.profile.username = form.value.korisnickoIme;
    this.profile.password = form.value.lozinka;
    console.log(form.value);
    console.log(this.profile);
  }
}
