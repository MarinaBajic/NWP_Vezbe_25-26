import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Person } from '../model/person';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-add-profile',
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './add-profile.html',
  styleUrl: './add-profile.css',
})
export class AddProfile implements OnInit {

  person!: Person;
  forma!: FormGroup;

  ngOnInit(): void {
    this.person = new Person('Pera', 'Peric', 'peki', 'peki123');
    this.forma = new FormGroup({
      ime: new FormControl('Ana', [Validators.minLength(4)]),
      prezime: new FormControl('Anic'),
      korisnickoIme: new FormControl('anci'),
      lozinka: new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    })
  }

  // Inace getter treba da se zove samo password ili lozinka.
  // "getterZaLozinku" je samo za vezbu.
  get getterZaLozinku() {
    return this.forma.get('lozinka');
  }

  submit() {
    this.person.name = this.forma.value.ime;
    this.person.surname = this.forma.value.prezime;
    this.person.username = this.forma.value.korisnickoIme;
    this.person.password = this.forma.value.lozinka;
    console.log(this.forma.value);
    console.log(this.person);
    console.log(this.person.name);
  }

}
