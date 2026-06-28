# Handoff / PR Description - Create Ticket

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
Primo slice del form di creazione ticket: scheletro UI con toggle tra lista e form, pulsante "+ Crea Ticket" nell'header (disabilitato durante loading e quando il form è aperto), campi title, description, customer, priority, area con select popolate, e pulsanti Invia (solo console.log), Resetta campi, Annulla (rosso).
```

## Issue

- Issue collegata: issue-contract\create-ticket-issue-final.md, output\prompt-patch-limitato-final.md

## Summary

Primo slice del form di creazione ticket: scheletro UI con toggle tra lista e form, pulsante "+ Crea Ticket" nell'header (disabilitato durante loading e quando il form è aperto), campi title, description, customer, priority, area con select popolate, e pulsanti Invia (solo console.log), Resetta campi, Annulla (rosso).

## Scope

Incluso:

- Stato `showForm` in App.jsx per alternare TicketList / TicketForm
- Pulsante "+ Crea Ticket" sotto `.environment-badge` in `.header-actions`
- Nuovo componente `TicketForm.jsx` con 5 campi e pulsanti
- Veste grafica coerente con `.ticket-section` tramite `.ticket-form-wrapper`
- Classi CSS nuove (header-actions, create-ticket-btn, form layout, btn variants, responsive)

Fuori scope:
- Validazione lato client (maxLength sì, ma nessun messaggio di errore né blocco submit)
- Chiamata API `POST /api/tickets` (server restituisce 501)
- Modifiche a server, api.js, TicketList, TicketCard, dati, validators
- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- UI completa, se non inclusa nello slice;
- refactor generale.

## File Toccati

| File | Perché è stato toccato |
| --- | --- |
| `src/App.jsx` | Aggiunto import `TicketForm`, stato `showForm`, wrapper `.header-actions` per badge + pulsante "+ Crea Ticket" sotto il badge, toggle condizionale tra form e lista, disabled dinamico |
| `src/components/TicketForm.jsx` | **Nuovo** — Componente form con campi title, description, customer, priority (select), area (select); pulsanti Invia Ticket (submit + console.log), Resetta campi, Annulla (rosso, torna alla lista) |
| `src/styles.css` | Aggiunte classi: `.header-actions`, `.create-ticket-btn`, `.ticket-form-wrapper`, `.ticket-form`, `.form-group`, `.form-row`, `.form-label`, `.form-required`, `.form-input`, `.form-textarea`, `.form-select`, `.form-actions`, `.btn`, `.btn--primary`, `.btn--secondary`, `.btn--danger`, varianti responsive |

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

- Implementazione logica Backed e validazione.
- server\data\tickets.js esistono già delle variabili utili a popolare i ticket ottenibili trmite endpoint API, ma al modello era stato richiesto di non accedere al server durante la creazione dello scheletro del form. Questi valori verrannp usati per popolare il form in fase di implementazione della logica di creazione del ticket.
- [cosa serve verificare in L09-L12] (ancora non evidenziabile)

## Rischio Residuo

- [rischio o blocco ancora aperto] - nessuno
