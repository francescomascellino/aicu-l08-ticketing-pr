# Esito Prompt Patch Limitato — Populate Selects From API

Data: 2026-06-28

---

## Documenti revisionati:
- Entry-point map: `output\pupulate-selects\entry-point-map-populate-selects-from-api-final.md`

## Task Confermato

> "Popolare dinamicamente le select Priority e Area del form TicketForm tramite chiamata API a GET /api/ticket-options, riducendo le chiamate al server al minimo."

## Slice Approvato

> Aggiungere funzione fetchTicketOptions in api.js, caricare le options una sola volta in App.jsx con useEffect ([], evitando fetch multipli), e passare priorità e aree come props a TicketForm, che le usa al posto delle costanti hardcoded.

## File Che Verranno Modificati

| File | Azione |
|------|--------|
| `src/api.js` | Aggiungere funzione `fetchTicketOptions()` che chiama `GET /api/ticket-options` e restituisce `{ priorities, areas }` |
| `src/App.jsx` | Aggiungere stato `options`, useEffect con `[]` per fetchTicketOptions al mount, passare `options.priorities` e `options.areas` come props a `TicketForm` |
| `src/components/TicketForm.jsx` | Ricevere `priorities` e `areas` come props, sostituire le costanti hardcoded `PRIORITY_OPTIONS` e `AREA_OPTIONS` con i valori dalle props |

## File Che Non Verranno Toccati

- `src/components/TicketList.jsx`
- `src/components/TicketCard.jsx`
- `src/styles.css`
- `server/index.js`
- `server/data/tickets.js`
- `server/validators/ticket.js`

## Cosa Resta Fuori Scope

- Auth
- Allegati
- Notifiche
- Owner avanzato
- Dashboard
- Migration
- Redesign
- Refactor generale
- Chiamata API di invio ticket
- Stili e UI del form
- Validazione lato client o server

## Verifica Manuale Proposta

> Al caricamento della pagina parte UNA chiamata a GET /api/ticket-options (non una per ogni apertura del form). Aprire il form TicketForm → le select Priority e Area sono popolate con i valori ricevuti dall'API (stessi valori delle costanti hardcoded prima). Chiudere e riaprire il form più volte → nessuna nuova chiamata a /api/ticket-options. Arrestare il server, ricaricare → le select rimangono non popolate (nessuna chiamata, comportamento atteso).

## Stop Condition

Fermarsi se:
- serve auth, migration, redesign, dashboard;
- serve toccare file non verificati;
- il tool propone piu' dello slice approvato.
