import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../model/product';

@Component({
  selector: 'app-create-product',
  imports: [ReactiveFormsModule],
  templateUrl: './create-product.html',
  styleUrl: './create-product.css',
})
export class CreateProduct implements OnInit {

  unosProizvodaForma!: FormGroup;
  proizvod!: Product;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.proizvod = new Product('', '', 0, 'new', [])
    this.unosProizvodaForma = this.fb.group({
      naziv: this.fb.control(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
      slika: this.fb.control(null),
      cena: this.fb.control(0, [Validators.min(0)]),
      tip: this.fb.control('used'),
      kljucneReci: this.fb.array([])
    });
  }

  // NAPOMENA ZA GETTERE: inace treba da se zovu samo name ili naziv, imageUrl ili slika itd.
  // Ovi nazivi su samo za vezbu.
  get getterZaNaziv() {
    return this.unosProizvodaForma.get('naziv');
  }

  get getterZaSliku() {
    // Vraca konkretnu vrednost
    return this.unosProizvodaForma.value.slika;
  }

  get getterZaCenu() {
    return this.unosProizvodaForma.get('cena');
  }

  get getterZaTip() {
    return this.unosProizvodaForma.value.tip;
  }

  get getterZaKljucneReci() {
    return this.unosProizvodaForma.get('kljucneReci') as FormArray;
  }

  addKeyword() {
    this.getterZaKljucneReci.push(
      this.fb.control('')
    )
  }

  submit() {
    this.proizvod.name = this.getterZaNaziv?.value;
    this.proizvod.imageUrl = this.getterZaSliku;
    this.proizvod.price = this.getterZaCenu?.value;
    this.proizvod.type = this.getterZaTip;
    this.proizvod.keywords = this.getterZaKljucneReci.value;
    console.log(this.unosProizvodaForma.value);
    console.log(this.proizvod);
  }
}
