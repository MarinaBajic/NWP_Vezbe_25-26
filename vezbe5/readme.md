## Pete praktične vežbe

Implementacija zadatka se nalazi u direktorijumu `vezbe5/pet-store`.

Predstojeći zadatak nadograđuje Pet Store veb-sajt sa prethodnih vežbi koristeći sledeće koncepte: **control flow** (@if, @for), **directives** (ngClass, ngStyle), **input** i **output**, kao i **content (view) projection**.

### Pet Store veb-sajt

1. Kreirati komponentu _ProductList_. U njoj inicijalizovati niz proizvoda, umesto da se jedan proizvod inicijalizuje u _Product_ komponenti. Izmeniti njen HTML template tako da koristi **@for** za kreiranje _Product_ komponente za svaki proizvod. Izmeniti _Product_ komponentu tako da prima proizvod kao **input**.
2. Umesto da dugme za smanjenje količine bude onemogućeno (disabled) kada je količina nula, koristiti **@if** da se dugme prikaže samo ukoliko je količina veća od nula.
3. Premestiti logiku za povećavanje/smanjivanje količine iz _Product_ komponente u _ProductList_ komponentu. Koristiti ID proizvoda za pronalaženje proizvoda i promenu njegove količine.
4. Preći sa jednostavnog vezivanja klasa na korišćenje **ngClass** direktive za isticanje proizvoda na sniženju. Neka neki proizvodi budu na sniženju, a neki ne. Pored isticanja, povećati i veličinu fonta cene za proizvode na sniženju.
5. Dodati **content (view) projection** u _Product_ komponentu i proslediti paragraf na dnu svake kartice proizvoda koji ispisuje poziciju tog proizvoda u nizu.

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe5/pet-store`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` da se pokrene server.
