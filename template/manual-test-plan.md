# Piano Di Verifica Manuale (Manual Test Plan) - Create Ticket

## Prima Di Compilare

Un piano di verifica manuale e' la lista dei controlli osservabili che puoi eseguire o dichiarare bloccati.

Serve a distinguere cio' che hai provato da cio' che resta ipotesi o blocco dichiarato.

L'output atteso e' una tabella con caso, azione, risultato atteso, esito e note.

Non scrivere solo "testato" o "funziona": indica cosa hai fatto e cosa hai visto.

## Contesto

Branch / PR:

```txt
create-ticket-form
```

Slice:

```txt
Creazione del componente form accessibile tramite click sul pulsante "Crea Ticket".
```

## Verifiche

| Caso | Azione | Risultato atteso | Esito | Note |
| --- | --- | --- | --- | --- |
| Caso valido | [azione] | [risultato] | pass / fail / bloccato | [nota] |
| Campo richiesto mancante | [azione] | [errore atteso] | pass / fail / bloccato | [nota] |
| Valore non ammesso | [azione] | [errore atteso] | pass / fail / bloccato | [nota] |
| Regressione minima | [azione] | [comportamento precedente resta ok] | pass / fail / bloccato | [nota] |

## Lettura Del Diff

| Domanda | Risposta |
| --- | --- |
| Quali file sono cambiati? | [file] |
| Erano previsti dalla mappa L07? | si / no / in parte |
| C'e' una modifica inattesa? | no / si: [spiega] |
| Il contract resta rispettato? | si / no / non verificato |

## Blocchi

Se non puoi verificare, scrivi:

```txt
Non verificato perche': [motivo concreto]
Prossimo passo minimo: Implementare validazione dell'oggetto prima di passare alla logica dell'invio della chiamta API e la logica backend di creazione di un nuovo ticket.
```

## Evidenza

- comando eseguito, se presente: [comando]
- screenshot o nota manuale: [riferimento]
- log non sensibile: [riferimento]
