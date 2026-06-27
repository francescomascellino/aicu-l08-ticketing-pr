# Prompt Patch Limitato

## Prima Di Compilare

Un prompt patch limitato e' l'istruzione operativa che userai nel lab per autorizzare solo il primo slice.

Serve a dire al builder:

- quale task affrontare;
- quali file puo' toccare;
- cosa resta fuori scope;
- quale verifica proporre;
- quando fermarsi.

Non usarlo per chiedere la feature completa o per autorizzare file non verificati.

Usa questo prompt nel lab L08, dopo il gate umano.

```txt
Dato questo task:
"Serve creare ticket dal supporto."

Usa questi input:
- issue: issue-contract/create-ticket-issue-final.md
- contract sketch: issue-contract\contract-plan-create-ticket-final.md
- data sketch: issue-contract\contract-plan-create-ticket-final.md
- mappa dei punti di intervento: template/entry-point-map.md

Applica solo il primo slice approvato:
Creazione del componente form accessibile tramite click sul punlsante "Crea Ticket".

File o aree ammesse:
- src/App.jsx
- src/styles.css
- src/components/TicketForm.jsx

File o aree vietate:
- server/index.js
-src/api.js 
- src/components/TicketList.jsx
- server/data/tickets.js
- server/validators/ticket.js | Sviluppatore | La logica di validazione potrebbe stare in un file separato | ammesso |

Non aggiungere:
- auth;
- allegati;
- notifiche;
- owner avanzato;
- dashboard;
- migration;
- redesign;
- refactor generale.

Prima di modificare, conferma:
- task;
- file che toccherai;
- cosa resta fuori scope;
- verifica manuale proposta.

Applica solo la patch minima approvata.
Fermati se servono file o decisioni fuori piano.
```

## Gate Umano Prima Della Patch

Prima di autorizzare modifiche, controlla che la risposta AI dica chiaramente:

- quali file tocchera';
- quali file non tocchera';
- quale verifica manuale propone;
- quando si fermera'.

Se manca uno di questi punti, chiedi correzione prima della patch.

## Verifica Attesa

```txt
Al click sul pulsante "Crea Ticket", viene mostrato il form. E' possibile annullare l'operazione e tornare alla Dashboard. E' Possibile resettare i campi con il pulsante preposto nel form. Ancora non è possibile inviare premendo sul pulsante "Invia Ticket".
```

## Note

- Non chiedere feature completa.
- Non chiedere di "sistemare tutto".
- Non autorizzare file non verificati.
