## Praktične vežbe 9 - Servisi i Asinhrone operacije

Implementacije zadataka se nalaze u direktorijumima `vezbe9/pet-store-services` i `vezbe9/pet-store-observable`.

### Pet Store servisi

Sledeći zadatak se može uraditi kao nadogradnja aplikacije `vezbe9/pet-store-base`. Aplikacija sadrži listu proizvoda (slično rešenju petih vežbi) i _template-driven_ formu za unos novog proizvoda.

1. Napraviti servis klasu za rad sa proizvodima.
2. Implementirati sledeće metode u servis klasi:
    - `getProducts()` - vraća listu proizvoda,
    - `addProduct(product)` - dodaje novi proizvod u listu proizvoda,
    - `changeQuantity(product_id, quantity_change)` - menja količinu proizvoda u korpi.
3. Umesto inicijalizovanja liste proizvoda u `ProductList` komponenti, koristiti servis klasu za dobavljanje svih proizvoda.
4. U komponenti `CreateProduct` koristiti servis klasu za dodavanje unetog proizvoda (dodati novi proizvod u listu svih proizvoda).
5. Posledica 4. stavke treba da bude da se novi proizvod pojavi među prvobitnim izlistanim proizvodima.

## Pet Store asinhrona komunikacija

Sledeći zadatak se može uraditi kao nadogradnja aplikacije `vezbe9/pet-store-services` (prethodni zadatak). Cilj je implementirati asinhronu komunikaciju kako bi komponente znale kada je došlo do neke promene sa proizvodima.

1. U servis klasi izmeniti metodu `getProducts()` tako da vraća `Observable` objekat kao omotač za proizvode.
2. U komponenti `ProductList` dodati `Observable` kao omotač za listu proizvoda, a u _HTML_-u iskoristiti _pipe_ `async` pri prikazu proizvoda.
3. U servis klasi izmeniti `changeQuantity()` metodu tako da vraća novi _Observable_ objekat.
4. U komponenti `ProductList` dodati _Observer_ pri pozivu `changeQuantity()` metode iz servis klase.
5. U servis klasi u `addProduct()` metodi dodati da metoda vraća novi _Observable_ objekat sa unetim proizvodom.
6. U `CreateProduct` komponenti dodati _Observer_ pri pozivu `addProduct()` metode iz servis klase. Ukoliko je proizvod uspešno dodat resetovati formu.

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe9/pet-store-base`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` kako bi se pokrenuo server.
