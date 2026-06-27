# Issue: Create ticket with validation

## Request

```txt
Serve creare ticket dal supporto.
```

## Fatti (Facts)

- Stiamo lavorando su un'applicativo di ticketing basilare a scopo didattico che usa React, JS, Node, Express.
- Il ticket avrà come forma minima un id (string), un title (obbligatorio) e una description (opzionale, max 3000 caratteri se fornita), una data di creazione e dovrà essere salvato su database. title non potrà essere vuoto o composto da soli spazi e non potrà superare i 100 caratteri dopo trimming. description, se fornita, non potrà superare i 3000 caratteri. Dovrà essere applicata la validazione logica per questo tipo di elemento.
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

1. **Validazione title**: se vuoto dopo trimming, o composto da soli spazi, o supera 100 caratteri, la POST non viene eseguita e l'utente riceve un errore che identifica il campo.

2. **Validazione description**: se fornita e supera 3000 caratteri dopo trimming, la POST non viene eseguita e l'utente riceve un errore che identifica il campo. Description è opzionale: può essere omessa o vuota.

3. Se tutte le validazioni passano, viene effettuata la chiamata POST che crea il ticket nel Database.

## Piano Di Verifica Manuale (Manual Test Plan)

- **Validazione passa:** il ticket viene creato correttamente nel Database; dai devtools è possibile controllare l'esito della chiamata. L'utente riceve a schermo un messaggio di conferma, il form viene svuotato.
- **Validazione fallisce:** l'utente riceve un messaggio di errore coerente che indica dove si trova il problema, evidenziando il campo in questione. La POST non viene eseguita.
