# Mappa Dei Punti Di Intervento (Entry-Point Map) - Create Ticket

## Prima Di Compilare

Una mappa dei punti di intervento (entry-point map) e' una mappa dei file o delle aree in cui la modifica potrebbe entrare.

Serve a distinguere:

- file suggeriti dall'AI;
- file trovati nel repo;
- file davvero collegati al task;
- file da non toccare.

L'output atteso e' una lista di candidati con evidenza, non una lista di nomi plausibili.

Non segnare un file come `ammesso` se non lo hai aperto o letto.

## Task

```txt
Serve creare ticket dal supporto.
```

## Input Usati

- Issue L05 importata: `issue-contract\create-ticket-issue-final.md`
- Contract sketch L06 importato: `issue-contract\contract-plan-create-ticket-final.md`
- Data sketch L06 importato: `issue-contract\contract-plan-create-ticket-final.md`

# Prompt

```txt
Dato il contenuto di
- Issue: `issue-contract\create-ticket-issue-final.md`
- Contract sketch: `issue-contract\contract-plan-create-ticket-final.md`
- Data sketch: `issue-contract\contract-plan-create-ticket-final.md`
Trova le aree candidate per creare nuovi ticket.
Non modificare file.
Per ogni area spiega perche' potrebbe contare.
Marca come ipotesi tutto cio' che non puoi verificare.
Indica il percorso relativo di ogni file.
Non accedere alle cartelle: docs, output, per-chi-non-ha-completato-l05-06, node_modules
```

## Regola

Un file suggerito dall'AI non e' ancora un file candidato verificato.

Diventa candidato solo se:

- esiste;
- e' stato aperto o letto;
- ha un ruolo collegato al task;
- hai scritto l'evidenza minima.

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
| src/components/TicketForm.jsx | Sviluppatore | Form di creazione del ticket | ammesso |


## File Ammessi Per Il Primo Slice

- server/index.js
- src/api.js
- src/App.jsx
- src/styles.css
- server/validators/ticket.js
- src/components/TicketForm.jsx

## File Vietati O Fuori Scope

- src/components/TicketList.jsx - Il form e il pulsante di creazione dei ticket si troverà in una sezione separata
- server/data/tickets.js - La validazione si troverà in una file separato

## Primo Slice Proposto

```txt
Creazione del componente form accessibile tramite click sul punlsante "Crea Ticket".
```

## Perche' Questo Slice E' Piccolo

- E' lo scheletro dietro il quale verrà costruita la logica per l'invio della chiamata API.
- Verifica manuale semplice

## Verifica Manuale Proposta

```txt
Al click sul pulsante "Crea Ticket", viene mostrato il form. E' possibile annullare l'operazione e tornare alla Dashboard. E' Possibile resettare i campi con il pulsante preposto nel form. Ancora non è possibile inviare premendo sul pulsante "Invia Ticket".
```

## Stop Condition

Fermarsi se:

- serve auth;
- serve migration;
- serve redesign;
- serve dashboard;
- serve toccare file non verificati;
- il tool propone piu' dello slice approvato.

## Domande Aperte Per L08

- [domanda 1]
- [domanda 2]
