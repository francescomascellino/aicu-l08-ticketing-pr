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
| src/api.js (righe 1-16) | AI  | anca una funzione createTicket(payload) che chiami POST /api/tickets. | ammesso |
| [file] | AI / repo / docente | [cosa hai letto] | ammesso / dubbio / vietato |

## File Ammessi Per Il Primo Slice

- [file o area ammessa]
- [file o area ammessa]

## File Vietati O Fuori Scope

- [file o area da non toccare] - [motivo]
- [file o area da non toccare] - [motivo]
- [file o area da non toccare] - [motivo]

## Primo Slice Proposto

```txt
[descrivi il primo intervento reviewabile, non la feature completa]
```

## Perche' Questo Slice E' Piccolo

- [motivo 1]
- [motivo 2]

## Verifica Manuale Proposta

```txt
[azione minima, input, risultato atteso]
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
