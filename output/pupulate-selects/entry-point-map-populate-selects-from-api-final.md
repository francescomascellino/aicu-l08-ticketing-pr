# Mappa Dei Punti Di Intervento (Entry-Point Map) - Populate Selects From API

## Task

```txt
Popolare dinamicamente le select Priority e Area del form TicketForm tramite
chiamata API a GET /api/ticket-options, riducendo le chiamate al server al minimo.
```

## Input Usati

- Issue L05 importata: `issue-contract\create-ticket-issue-final.md`
- Contract sketch L06 importato: `issue-contract\contract-plan-create-ticket-final.md`
- Entry-point map slice 1: `output\entry-point-map-final.md`
- Codice esistente: `server/index.js`, `server/data/tickets.js`, `src/api.js`, `src/App.jsx`, `src/components/TicketForm.jsx`

# Mappa Generale — File Candidati Per Il Task Completo

## File Candidati

| File / area | Suggerito da | Evidenza verificata | Stato |
| --- | --- | --- | --- |
| server/data/tickets.js (righe 40-42) | AI | `allowedPriorities` e `allowedAreas` sono il source of truth dei valori. Già esportati e usati da server/index.js. | ammesso |
| server/index.js (righe 19-24) | AI | Endpoint `GET /api/ticket-options` già esistente, restituisce `{ priorities, areas }`. Funzionante. | ammesso |
| src/api.js | AI | Manca funzione `fetchTicketOptions()`. Seguirebbe il pattern esistente di `fetchOpenTickets()`. | ammesso |
| src/App.jsx | Sviluppatore | Già orchestrazione dati (useEffect per ticket). Aggiungere secondo useEffect con `[]` per caricare options una sola volta; passare `priorities` e `areas` come prop a `TicketForm`. | ammesso |
| src/components/TicketForm.jsx (righe 3-4) | AI | Costanti `PRIORITY_OPTIONS` e `AREA_OPTIONS` attualmente hardcoded. Sostituire con props ricevute da App. | ammesso |

## File Vietati O Fuori Scope

- server/data/tickets.js — Nessuna modifica al source of truth; è già pronto.
- server/index.js — Nessuna modifica all'endpoint; è già pronto e funzionante.
- src/components/TicketList.jsx — Non consuma options. Nessuna modifica.
- src/components/TicketCard.jsx — Consuma solo `ticket.priority`, non genera opzioni. Nessuna modifica.
- src/styles.css — Nessuna modifica stilistica necessaria.

---

# Mappa Di Slice — Populate Selects From API

## Slice Proposto

```txt
Aggiungere funzione fetchTicketOptions in api.js, caricare le options una sola volta
in App.jsx con useEffect ([], evitando fetch multipli), e passare priorità e aree
come props a TicketForm, che le usa al posto delle costanti hardcoded.
```

## Perché Questo Slice È Piccolo

- Tre file toccati, tutti già candidati nell'entry-point map originale.
- Nessuna modifica a server, stili, o altri componenti.
- Verifica manuale immediata.

## File Ammessi Per Questo Slice

- src/api.js
- src/App.jsx
- src/components/TicketForm.jsx

## File Vietati O Fuori Scope

- server/index.js — Endpoint già esistente, nessuna modifica.
- server/data/tickets.js — Source of truth già pronto.
- src/components/TicketList.jsx — Non pertinente.
- src/components/TicketCard.jsx — Non pertinente.
- src/styles.css — Nessuna modifica stilistica.

## Verifica Manuale Proposta

```txt
Avviare server e client. Aprire DevTools → Network. Verificare:
1. Al caricamento della pagina parte UNA chiamata a GET /api/ticket-options (non
   una per ogni apertura del form).
2. Aprire il form TicketForm → le select Priority e Area sono popolate con i valori
   ricevuti dall'API (stessi valori delle costanti hardcoded prima).
3. Chiudere e riaprire il form più volte → nessuna nuova chiamata a /api/ticket-options.
4. Arrestare il server, ricaricare → le select rimangono non popolate (nessuna
   chiamata, comportamento atteso).
```

---

## Documenti Collegati

- Entry-point map slice 1: `output/entry-point-map-final.md`
