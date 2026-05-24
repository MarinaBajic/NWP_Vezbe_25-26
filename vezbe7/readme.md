## Praktične vežbe 7 - Template-driven forme

### Pet Store Template-driven forma

Predstojeći zadatak nadograđuje _Add new Product_ formu sa prethodnih vežbi koristeći sledeće koncepte: **ngForm**, **ngModelGroup**, **template reference variables** i **html pattern validation** sa **regex izrazima**.

1. Iskopirati rešenje sa prethodnih vežbi (`vezbe6/pet-store-template-driven-form`)
2. Dodati validaciju za naziv proizvoda da mora imati najmanje 3 slova, a najviše 20.
3. Ukoliko naziv proizvoda nije validan, ispisati tekst ispod polja za unos koji obaveštava korisnika o nevalidnosti.
4. Dodati polje za unos šifre proizvoda koja mora početi sa `PS-`, zatim sadrži naziv proizvoda, i na kraju sadrži jedinstveni kod koji se sastoji od tačno 3 cifre (npr. `PS-Ball-101`). Ukoliko šifra proizvoda nije validna, obavestiti korisnika.
5. Ukoliko je proizvod nov, korisniku se prikazuje polje za unos broja artikala na stanju i polje za unos proizvođača. Ukoliko je proizvod korišćen, korisniku se prikazuje polje za opis stanja i polje za unos datuma kupovine. Ukoliko je proizvod nekorišćen, korisniku se prikazuje opcija za štikliranje da li je proizvod u originalnoj kutiji i polje za opis.
6. Grupisati sa **ngModelGroup** osnovne podatke i podatke za svaki tip proizvoda (_new_, _used_ ili _unused_).

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe7/pet-store-template-driven-form`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` kako bi se pokrenuo server.
