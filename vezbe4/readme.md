## Praktične vežbe 4

Implementacija zadatka se nalazi u direktorijumu `vezbe4/pet-store`.

Uputstvo za instaliranje i pokretanje Angular aplikacija se nalazi u datoteci `vezbe4/angular_setup.md`.

Zadatak je da se implementira jednostavan _Pet Store_ veb-sajt koji koristi sledeće Angular koncepte: **components**, **data binding** (_text interpolation_ i _property binding_), **event binding** i **pipes**.

### Pet Store veb-sajt

1. Napraviti novi projekat sa nazivom `pet-store`.
2. Kreirati **komponentu** za prikaz jednog proizvoda.
3. Ta komponenta treba da prikazuje naziv, cenu (koristiti **pipe** za valutu) i sliku proizvoda. Komponenta se može inicijalizovati nekim podrazumevanim vrednostima. Koristiti bilo koju _placeholder_ sliku (slika treba da bude sačuvana kao URL sa relativnom putanjom do slike).
4. Istaknuti ceo element drugom bojom ukoliko je proizvod na sniženju. Informacija da li je proizvod na sniženju može biti atribut samog proizvoda.
5. Dodati dugmiće za povećavanje i smanjivanje količine proizvoda u korpi. Količina proizvoda u korpi (svaki proizvod posebno) treba da bude vidljiva u korisničkom interfejsu. Onemogućiti dugme za smanjivanje količine ukoliko je količina već nula.
6. Organizovati podatke o proizvodu na bolji način tako što će proizvod biti predstavljen kao **klasa** i zatim korišćen u komponenti.

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe4/pet-store`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` da se pokrene server.
