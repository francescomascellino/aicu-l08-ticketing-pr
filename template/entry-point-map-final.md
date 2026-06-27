# Mappa Dei Punti Di Intervento (Entry-Point Map) - Create Ticket

## Task

```txt
Serve creare ticket dal supporto.
```

## Input Usati

- Issue L05 importata: `issue-contract\create-ticket-issue-final.md`
- Contract sketch L06 importato: `issue-contract\contract-plan-create-ticket-final.md`
- Data sketch L06 importato: `issue-contract\contract-plan-create-ticket-final.md`

# Mappa Generale — File Candidati Per Il Task Completo

## File Candidati

| File / area | Suggerito da | Evidenza verificata | Stato |
| --- | --- | --- | --- |
| server/index.js (righe 26-31) | repo/AI |  La route POST /api/tickets restituisce 501 NOT_IMPLEMENTED. Questa è la rotta API per la creazione di un nuovo ticket | ammesso |
| src/api.js (righe 1-16) | AI  | Manca una funzione createTicket(payload) che chiami POST /api/tickets. | ammesso |
| src/App.jsx (righe 1-57) | Sviluppatore | Dovrebbe ospitare il pulsante "Crea ticket" | ammesso |
| src/components/TicketList.jsx | AI | Potrebbe ospitare il pulsante "Crea ticket" nell'intestazione della sezione, oppure delegare ad App. Ipotesi: il form potrebbe essere integrato qui o essere un componente separato. | vietato |
| src/styles.css | AI | serviranno nuove classi CSS per il form di creazione e per i feedback di validazione. | ammesso |
| server/data/tickets.js | AI | Il contract plan (sezione 6) definisce un error model minimo con 2 casi: campo richiesto mancante/vuoto e valore fuori contratto. | vietato |
| server/validators/ticket.js | Sviluppatore | La logica di validazione potrebbe stare in un file separato | ammesso |
| src/components/TicketForm.jsx | Sviluppatore | Form di creazione del ticket | ammesso, da creare |

---

# Mappa Di Slice — Primo Slice: Form

## Primo Slice Proposto

```txt
Creazione del componente form accessibile tramite click sul pulsante "Crea Ticket".
```

## Perche' Questo Slice E' Piccolo

- E' lo scheletro dietro il quale verrà costruita la logica per l'invio della chiamata API.
- Verifica manuale semplice

## File Ammessi Per Il Primo Slice

- src/App.jsx
- src/styles.css
- src/components/TicketForm.jsx

## File Vietati O Fuori Scope

- server/index.js — Nessuna modifica al server in questo slice UI. Le rotte API verranno implementate in slice successivi.
- src/api.js — Nessuna chiamata API in questo slice. La funzione createTicket() verrà aggiunta in slice successivi.
- src/components/TicketList.jsx — Il form e il pulsante "Crea Ticket" sono gestiti da App.jsx, non da TicketList.
- server/data/tickets.js — La logica dati non è toccata in questo slice UI.
- server/validators/ticket.js — La validazione è richiesta dal task generale ma non dal primo slice (solo scheletro form). Verrà implementata in slice successivi.

## Verifica Manuale Proposta

```txt
Al click sul pulsante "Crea Ticket", viene mostrato il form. E' possibile annullare l'operazione e tornare alla Dashboard. E' Possibile resettare i campi con il pulsante preposto nel form. Ancora non è possibile inviare premendo sul pulsante "Invia Ticket".
```

---

## Documenti Collegati

- Piano patch eseguito: `output/prompt-patch-limitato.md`
- Review del piano: `output/reviewer-leggero.md`
