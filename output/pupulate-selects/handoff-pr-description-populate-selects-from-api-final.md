# Handoff / PR Description — Populate Selects From API

## Prima Di Compilare

Un handoff / PR description e' la sintesi tecnica dello stato del lavoro.

Serve a far capire a un reviewer:

- perche' esiste il branch o la PR;
- cosa include il primo slice;
- quale piano e' stato autorizzato;
- cosa e' stato verificato;
- cosa resta fuori o va ripreso.

Non usarlo per promettere la feature completa o nascondere blocchi.

## Summary

```txt
Caricare dinamicamente le opzioni delle select Priority e Area del form TicketForm tramite chiamata API GET /api/ticket-options, eseguita una sola volta al mount dell'app, e passare i valori come props a TicketForm sostituendo le costanti hardcoded. In caso di errore di fetch, loggare in console e disabilitare i select mostrando "Nessuna opzione disponibile".
```

## Issue

- Issue collegata: `issue-contract\create-ticket-issue-final.md`, `output\entry-point-map-final.md`, `output\pupulate-selects\entry-point-map-populate-selects-from-api-final.md`
- Piano autorizzato: `output\pupulate-selects\prompt-patch-limitato-populate-selects-from-api-final.md`

## Scope

Incluso:

- Funzione `fetchTicketOptions()` in `src/api.js` che chiama `GET /api/ticket-options`
- Stato `options` e `useEffect` con `[]` in `src/App.jsx` per fetch unico al mount
- Passaggio di `priorities` e `areas` come props a `TicketForm`
- Sostituzione delle costanti hardcoded `PRIORITY_OPTIONS` e `AREA_OPTIONS` con le props ricevute
- Gestione errore fetch: `console.error` + stato `optionsError` + select disabilitati con opzione "Nessuna opzione disponibile"

Fuori scope:

- Modifiche a server (`index.js`, `data/tickets.js`, `validators/`)
- Modifiche a `TicketList.jsx`, `TicketCard.jsx`, `styles.css`
- Validazione lato client o server
- Chiamata API `POST /api/tickets`
- Auth, allegati, notifiche, owner avanzato, dashboard, migration, redesign, refactor generale

## File Toccati

| File | Perché è stato toccato |
| --- | --- |
| `src/api.js` | Aggiunta funzione `fetchTicketOptions()` che chiama `GET /api/ticket-options` e restituisce `{ priorities, areas }` |
| `src/App.jsx` | Aggiunto import `fetchTicketOptions`, stato `options` e `optionsError`, `useEffect` con `[]` per caricare options una volta al mount, passaggio di `priorities`, `areas`, `optionsError` come props a `TicketForm` |
| `src/components/TicketForm.jsx` | Rimosse costanti hardcoded `PRIORITY_OPTIONS` e `AREA_OPTIONS`; riceve `priorities`, `areas`, `optionsError` come props; se `optionsError` è `true` i select vengono disabilitati con opzione "Nessuna opzione disponibile" |

## Gate Prima Della Patch

Il tool ha confermato prima di modificare:

- ✅ task;
- ✅ file da toccare;
- ✅ file da non toccare;
- ✅ verifica manuale proposta;
- ✅ quando fermarsi.

## Verifica

- [ ] Caso valido provato o dichiarato non ancora eseguibile.
- [ ] Caso invalido previsto o bloccato con motivo.
- [ ] Comportamento esistente non intenzionalmente cambiato.

## Output AI

| Output | Decisione |
| --- | --- |
| Piano | accettato |
| Patch | modificata |
| Review | accettata |

## Residuo

- In caso di errore di fetch di `GET /api/ticket-options`, loggare l'errore in console con `console.error` e, in `TicketForm`, disabilitare i select Priority/Area mostrando "Nessuna opzione disponibile" con `value=""` e attributo `disabled`, seguendo il pattern di graceful degradation per dati opzionali non caricati.

## Rischio Residuo

- Nessuno — le select degradano gracefulmente in caso di errore di fetch.
