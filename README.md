# ArPa.ai — strona firmowa

Nowoczesny, responsywny landing page dla firmy wdrażającej AI i automatyzacje. Projekt oparty na Astro, bez ciężkiego frameworka JS po stronie klienta.

## Wymagania

- Node.js 20.3+ (zalecane Node 22 LTS)
- npm

## Uruchomienie lokalne

```bash
npm install
cp .env.example .env
npm run dev
```

Otwórz adres pokazany przez Astro, zwykle `http://localhost:4321`.

## Formularz kontaktowy

Formularz korzysta z Formspree, więc nie wymaga własnego backendu.

1. Załóż formularz na [formspree.io](https://formspree.io/).
2. Skopiuj endpoint formularza.
3. W pliku `.env` ustaw `PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/TWOJ_ID`.
4. W panelu Formspree ustaw adres e-mail odbiorcy i potwierdź go.
5. Przetestuj wysyłkę po wdrożeniu.

Bez skonfigurowanego endpointu formularz pokaże użytkownikowi czytelny komunikat zamiast udawać wysłanie wiadomości.

## Konfiguracja przed publikacją

Wyszukaj `TODO` w projekcie i uzupełnij:
- `https://arpa.ai` w `astro.config.mjs` oraz canonical/OG w `src/layouts/BaseLayout.astro` — jeśli domena będzie inna.
- adres e-mail, telefon i dane firmy w `src/pages/index.astro`.
- linki LinkedIn i politykę prywatności.
- przykłady zastosowań i ofertę zgodnie z faktycznymi usługami ArPa.ai.

Nie publikuj nieprawdziwych referencji, wyników, certyfikatów ani obietnic liczbowych. Sekcja „Przykładowe zastosowania” opisuje typowe scenariusze, nie zrealizowane case studies.

## Build

```bash
npm run check
npm run build
npm run preview
```

Gotowa statyczna strona znajduje się w katalogu `dist/`.

## Wdrożenie

### Cloudflare Pages

1. Wypchnij repozytorium do GitHub.
2. W Cloudflare Pages wybierz `Create a project` → `Connect to Git`.
3. Framework preset: `Astro`.
4. Build command: `npm run build`.
5. Build output directory: `dist`.
6. Dodaj zmienną środowiskową `PUBLIC_FORMSPREE_ENDPOINT` w ustawieniach projektu.
7. Podłącz domenę `arpa.ai` i skonfiguruj DNS zgodnie z instrukcjami Cloudflare.

### Vercel

1. Zaimportuj repozytorium w Vercel.
2. Framework: Astro (lub ustaw ręcznie).
3. Build command: `npm run build`; output: `dist`.
4. Dodaj `PUBLIC_FORMSPREE_ENDPOINT` w Environment Variables.
5. Podłącz domenę.

Strona jest statyczna. Nie potrzebuje serwera aplikacyjnego ani bazy danych.

## Edycja treści

Główna treść strony znajduje się w `src/pages/index.astro`. Globalne kolory, typografia i komponenty są w `src/styles/global.css`.
