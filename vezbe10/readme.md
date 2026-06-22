## Praktične vežbe 10 - HTTP zahtevi i rutiranje

### HTTP zahtevi

Da bismo slali HTTP zahteve, potreban nam je server. Koristićemo unapred pripremljen Node.js _server_. Veoma je jednostavan i nema mogućnost trajnog čuvanja podataka (što znači da će sve izmene koje se naprave biti izgubljene nakon ponovnog pokretanja servera). Implementacija servera se nalazi u direktorijumu `vezbe10/server`.

Dostupni endpoint-ovi su:

`GET /api/product` – vraća sve proizvode
`POST /api/product` – dodaje novi proizvod
`PUT /api/product/:id` – ažurira proizvod sa datim ID-jem

Da biste pokrenuli server, pratite uputstva iz datoteke `vezbe10/server_setup.md`.

1. Iskopirati rešenje sa prethodnih vežbi (`vezbe9/pet-store-observable`).
2. Pokrenuti server i aplikaciju.
3. Izmeniti `ProductServis` klasu tako da poziva endpoint-ove od servera.

### Rutiranje

Sledeći zadatak se može uraditi kao nadogradnja aplikacije `vezbe10/pet-store-http` (prethodni zadatak)

U datoteci `app.routes.ts` definisati sledeće rute koje predstavljaju različite stranice i za svaku stranicu definisati kojom komponentom je implementirana:

- `/` - početna stranica (redirektuje se na `/list`)
- `list` - lista svih proizvoda
- `create` - forma za dodavanje novog proizvoda
- _wildcard_ ruta koja redirektuje na početnu stranicu

### Kako pokrenuti projekat?

1. Klonirati repozitorijum na lokalnu mašinu.
2. Ispratiti sva uputstva iz `vezbe4/angular_setup.md` za podešavanje nvm, npm, node i angular cli.
3. Otvoriti terminal i navigirati se do root direktorijuma Angular projekta (npr. `vezbe10/pet-store-http`).
4. Izvršiti `npm install` kako bi se instalirale sve zavisnosti.
5. Ako postoje ranjivosti, izvršiti `npm audit fix` kako bi se ispravile.
6. Izvršiti `ng serve` kako bi se pokrenuo server.
