## Praktične vežbe 6 - Bootstrap uz Angular, Template-driven Forme

Implementacije zadataka se nalaze u direktorijumima `vezbe6/pet-store-with-bootstrap` i `vezbe6/template-driven-form`.

Uputstvo za podešavanje _Bootstrap_-a unutar Angular aplikacije se nalazi u datoteci `vezbe6/bootstrap_setup.md`.

### Pet Store veb-sajt uz Bootstrap

Stilizovati _Pet Store_ veb-sajt sa prethodnih vežbi pomoću **Bootstrap**-a umesto običnog _CSS_-a.

### Template-driven Forma

Sledeći projekat treba da sadrži jednostavnu **template-driven** formu koja koristi **ngModel** direktivu za jednosmerno i dvosmerno povezivanje podataka.

1. Napraviti novi projekat.
2. Napraviti klasu `Product` sa atributima `name`, `imageUrl`, `price` i `type` (_new_, _used_ ili _unused_).
3. Napraviti komponentu `create-product` sa **template-driven** formom za dodavanje novog proizvoda. Forma treba da sadrži polja za unos svih atributa klase `Product`. Polje za unos imena (`name`) treba da bude obavezno.
4. Dodati _checkbox_ za prihvatanje uslova.
5. Dodati _submit_ i _reset_ dugmiće u formu. _Submit_ dugme treba da bude onemogućeno ukoliko korisnik nije prihvatio uslove.
6. Povezati input polja sa odgovarajućim atributima `Product` klase pomoću **ngModel**. Koristiti **jednosmerno** i **dvosmerno** povezivanje podataka. Naziv proizvoda uvek treba da bude ispisan velikim slovima.
7. Koristiti CSS klase za stanje forme:
    - Uokviriti polje za unos naziva zelenom bojom ako je validno, a crvenom ako nije.
    - Uokviriti polje za unos URL-a slike zelenom bojom ako je nepromenjeno, a crvenom ukoliko je promenjeno.
    - Uokviriti polje za unos cene zelenom bojom ukoliko nije posećeno, a crvenom ukoliko jeste.

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe6/pet-store-with-bootstrap`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` kako bi se pokrenuo server.
