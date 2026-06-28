# Manual Test Plan — Slice 1: Scheletro Form Crea Ticket

## Contesto

Branch / PR:

```txt
create-ticket-form
```

Slice:

```txt
Creazione del componente form accessibile tramite click sul pulsante "Crea Ticket".
```

## Prerequisiti

- Server avviato: `node server/index.js`
- Build client: `npx vite build` (o `npx vite dev` per hot-reload)
- Browser aperto su `http://localhost:3001` (o porta usata da Vite dev)

---

## Verifiche

| # | Caso | Azione | Risultato atteso | Esito | Note |
|---|------|--------|------------------|-------|------|
| 1 | Pulsante visibile e abilitato | Caricare pagina con ticket pronti (`status === "ready"`) | Pulsante "+ Crea Ticket" abilitato sotto il badge, header invariato in altezza | pass | |
| 2 | Pulsante disabilitato durante caricamento | Ricaricare pagina (`status === "loading"`) | Pulsante "+ Crea Ticket" visibile ma disabilitato (grigio, `cursor: not-allowed`) | pass | Dai devtools simulare network lento |
| 3 | Pulsante disabilitato durante creazione | Click "+ Crea Ticket" → form visibile | Pulsante "+ Crea Ticket" disabilitato finché il form è aperto | pass | |
| 4 | Apertura form sostituisce lista | Click "+ Crea Ticket" | TicketList scompare, TicketForm appare con stessa veste grafica (bordo, bg, padding, ombra) | pass | |
| 5 | Annulla torna alla lista | Click "Annulla" (pulsante rosso) | Form sparisce, TicketList riappare, pulsante "+ Crea Ticket" riabilitato | pass | |
| 6 | Resetta campi svuota form | Inserire dati in tutti i campi, click "Resetta campi" | Tutti i campi tornano allo stato iniziale (vuoti / "-- Seleziona --") | pass | |
| 7 | Invia Ticket non esegue chiamate API | Compilare form, click "Invia Ticket" | Nessuna chiamata di rete (devtools → Network), nessun reload pagina | pass | Solo `console.log` dei dati in DevTools |
| 8 | Console.log dati form | Click "Invia Ticket" con campi compilati, aprire DevTools → Console | Output: `Ticket form data: { "title": "...", "description": "...", ... }` | pass | |
| 9 | Select Priority — valori attesi | Aprire select Priority | Opzioni: "-- Seleziona --", "Alta", "Media", "Bassa" | pass | |
| 10 | Select Area — valori attesi | Aprire select Area | Opzioni: "-- Seleziona --", "Billing", "Accessi", "Comunicazioni", "Tecnico" | pass | |
| 11 | Title max 100 caratteri | Digitare oltre 100 caratteri nel campo title | Il campo non accetta più di 100 caratteri (`maxLength`) | pass | Coerenza del campo del form, non è il validator effettivo |
| 12 | Description max 3000 caratteri | Digitare oltre 3000 caratteri nel campo description | Il campo non accetta più di 3000 caratteri (`maxLength`) | pass | Coerenza del campo del form, non è il validator effettivo |
| 13 | Errore di caricamento ticket | Arrestare il server, ricaricare pagina/restituire momentaneamente "error" e non "ready" nel metodo `loadTickets` | Messaggio "Impossibile caricare i ticket aperti." con sfondo rosso `.state-message--error` | | Il pulsante "+ Crea Ticket" resta disabilitato |
| 14 | Regressione: lista ticket | Annullare il form → visualizzare lista | TicketList mostra gli stessi ticket di prima, nessun dato perso | pass | |
| 15 | Regressione: responsive < 640px | Ridurre finestra sotto 640px | Header: badge e pulsante si impilano in colonna a sinistra. Form: `.form-row` passa da affiancato a colonna | pass | |

## Lettura Del Diff

| Domanda | Risposta |
| --- | --- |
| Quali file sono cambiati? | `src/App.jsx`, `src/components/TicketForm.jsx` (nuovo), `src/styles.css` |
| Erano previsti dalla mappa L07? | si |
| C'e' una modifica inattesa? | no |
| Il contract resta rispettato? | si |

## Blocchi

```txt
Non verificato perche': La route POST /api/tickets sul server restituisce 501 NOT_IMPLEMENTED.
Prossimo passo minimo: Implementare validazione dell'oggetto prima di passare alla logica dell'invio della chiamata API e la logica backend di creazione di un nuovo ticket.
```

## Evidenza

- comando eseguito: `npx vite build` (build riuscita, 0 errori, 20 moduli trasformati)
- comando eseguito: `pnpm dev` (server avviato su porta 3001, app avviatra su porta 5173)
- comando eseguito: `node server/index.js` (server avviato su porta 3001)
- comportamento osservato: al click su "+ Crea Ticket" il form sostituisce TicketList; "Annulla" ripristina la lista; "Resetta campi" svuota i campi; "Invia Ticket" logga i dati in console senza chiamate di rete