# Issue: Create ticket with validation

## Request

```txt
Serve creare ticket dal supporto.
```

## Fatti (Facts)

- Stiamo lavorando su un'applicativo di ticketing basilare a scopo didattico che usa React, JS, Node, Express.
- Il ticket avrà come forma minima un id e un content, una data di creazione e dovrà essere salvato su database. Non potrà superare i 3000 caratteri e non potrà essere vuoto o composto da soli spazi. Dovrà essere applicata la validazione logica per questo tipo di elemento.
- L'ID verrà creato dal database
- Gli endpoint per le chiamate sono già esposti dal server
- Useremo un pattern MVC
- Includiamo createdAt nel modello Ticket già ora, ma non la esponiamo nella UI

## Assunzioni (Assumptions)

- Potrebbe essere necessario in futuro implementare le funzioni di edit e delete del ticket

## Domande Aperte (Questions)

*(nessuna — tutte risolte)*

## Decisione (Decision)

Per questo slice, "creare ticket" significa:

```txt
Avere a disposizione un componente raggiungibile dalla UI che ci permette tramite un form validato di creare un Ticket da salvare sul Database.
```

## Criteri Di Accettazione (Acceptance Criteria)

1. Qualsiasi validazione fallisca (max 3000 char dopo trimming, campo vuoto dopo trimming, non soli spazi), la POST non viene eseguita e l'utente riceve un errore che identifica il campo. Il content viene trimmato prima della validazione.
2. Se tutte le validazioni passano (≤ 3000 char e non vuoto dopo trimming), viene effettuata la chiamata POST che crea il ticket nel Database.

## Piano Di Verifica Manuale (Manual Test Plan)

- **Validazione passa:** il ticket viene creato correttamente nel Database; dai devtools è possibile controllare l'esito della chiamata. L'utente riceve a schermo un messaggio di conferma, il form viene svuotato.
- **Validazione fallisce:** l'utente riceve un messaggio di errore coerente che indica dove si trova il problema, evidenziando il campo in questione. La POST non viene eseguita.
