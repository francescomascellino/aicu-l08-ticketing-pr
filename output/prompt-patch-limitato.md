# Esito Prompt Patch Limitato — L08

Data: 2026-06-27

---

## Task Confermato

> "Serve creare ticket dal supporto."

## Slice Approvato

> Creazione del componente form accessibile tramite click sul pulsante "Crea Ticket".

## File Che Verranno Modificati / Creati

| File | Azione |
|------|--------|
| `src/App.jsx` | Aggiungere stato `showForm`, pulsante "Crea Ticket", toggle condizionale tra `TicketList` e `TicketForm` |
| `src/components/TicketForm.jsx` | **Nuovo** — componente form con campi title, description, customer, priority, area; pulsanti Annulla, Resetta campi, Invia Ticket (non funzionante) |
| `src/styles.css` | Aggiungere classi CSS per form, field group, input/textarea/select, pulsanti, responsive |

## File Che Non Verranno TocCAti

- `src/components/TicketList.jsx`
- `src/components/TicketCard.jsx`
- `src/api.js`
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

## Verifica Manuale Proposta

> Al click sul pulsante "Crea Ticket", viene mostrato il form. E' possibile annullare l'operazione e tornare alla Dashboard. E' Possibile resettare i campi con il pulsante preposto nel form. Ancora non è possibile inviare premendo sul pulsante "Invia Ticket".

## Stop Condition

Fermarsi se:
- serve auth, migration, redesign, dashboard;
- serve toccare file non verificati;
- il tool propone piu' dello slice approvato.
