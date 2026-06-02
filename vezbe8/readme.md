## Praktične vežbe 8 - Reactive forme

Implementacija zadatka se nalazi u direktorijumu `vezbe8/pet-store-reactive-form`.

### Pet Store Reactive forma

1. Napraviti novi projekat.
2. Napraviti klasu `Product` sa atributima `name`, `imageUrl`, `price` i `type` (_new_, _used_ ili _unused_).
3. Napraviti komponentu `create-product` sa **reactive** formom za dodavanje novog proizvoda. Forma treba da sadrži polja za unos svih atributa klase `Product`.
4. Povezati input polja sa odgovarajućim atributima `Product` klase pomoću **FormGroup** i **FormControl**.
5. Dodati sledeće validacije:
    - polje za unos naziva (`name`) treba da bude obavezno,
    - naziv proizvoda mora imati najmanje 3 slova, a najviše 20,
    - cena (`price`) ne sme biti negativan broj.
6. Uokviriti polja za unos crvenom bojom ukoliko su posećena ili promenjena, a nevalidna su.
7. Ukoliko polja za unos nisu validna, ispisati tekst ispod polja koji obaveštava korisnika o konkretnoj nevalidnosti.
8. Dodati _Submit_ dugme u formu koje treba da bude onemogućeno ukoliko forma nije validna.
9. Umesto pozivanja **FormGroup** i **FormControl** klasa za povezivanje polja za unos, koristiti **FormBuilder**.
10. Dodati dugme _Add keyword_, na čiji svaki klik se pojavljuje novo polje za unos nove ključne reči. Povezati ova polja pomoću **FormArray**.

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe8/pet-store-reactive-form`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` kako bi se pokrenuo server.
