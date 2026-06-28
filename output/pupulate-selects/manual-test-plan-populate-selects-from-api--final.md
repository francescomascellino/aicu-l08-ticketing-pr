# Manual Test Plan — Populate Selects From API

## Contesto

Branch / PR:

```txt
populate-selects
```

Slice:

```txt
Aggiungere funzione fetchTicketOptions in api.js, caricare le options una sola volta in App.jsx con useEffect ([], evitando fetch multipli), e passare priorità e aree come props a TicketForm, che le usa al posto delle costanti hardcoded.
```

## Prerequisiti

- Server avviato: `node server/index.js`
- Build client: `npx vite build` (o `npx vite dev` per hot-reload)
- Browser aperto su `http://localhost:3001` (o porta usata da Vite dev)
- DevTools → Network aperto

---

## Verifiche

| # | Caso | Azione | Risultato atteso | Esito | Note |
|---|------|--------|------------------|-------|------|
| 1 | Chiamata unica al mount | Ricaricare la pagina, osservare DevTools → Network | Una sola chiamata `GET /api/ticket-options` (non una per ogni apertura del form) | | |
| 2 | Select Priority popolata da API | Aprire il form TicketForm, aprire select Priority | Opzioni: "-- Seleziona --", "Alta", "Media", "Bassa" (valori provenienti dall'API) | | |
| 3 | Select Area popolata da API | Aprire il form TicketForm, aprire select Area | Opzioni: "-- Seleziona --", "Billing", "Accessi", "Comunicazioni", "Tecnico" (valori provenienti dall'API) | | |
| 4 | Nessun re-fetch a ogni apertura | Chiudere e riaprire il form più volte | Nessuna nuova chiamata `GET /api/ticket-options` dopo la prima | | |
| 5 | Server fermo — select non popolate | Arrestare il server, ricaricare la pagina, aprire il form | Select Priority e Area vuote (solo "-- Seleziona --"), nessuna chiamata di rete | | |
| 6 | Regressione: pulsante "+ Crea Ticket" | Verificare che il pulsante sia ancora presente e funzionante | Pulsante visibile e abilitato quando `status === "ready"` | | |
| 7 | Regressione: apertura/chiusura form | Click "+ Crea Ticket" → click "Annulla" | Form si apre e chiude correttamente, TicketList riappare | | |

## Lettura Del Diff

| Domanda | Risposta |
| --- | --- |
| Quali file sono cambiati? | `src/api.js`, `src/App.jsx`, `src/components/TicketForm.jsx` |
| Erano previsti dalla entry-point map? | si |
| C'e' una modifica inattesa? | no |
| Il contract resta rispettato? | si |

## Blocchi

```txt
Nessun blocco rilevato.
```

## Evidenza

- comando eseguito: (da compilare)
- comportamento osservato: (da compilare)
