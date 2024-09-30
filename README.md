# UI Kit LP Abl Components

Benvenuti nella libreria **UI Kit LP Abl Components**! Questa libreria Angular contiene una raccolta di componenti riutilizzabili per la creazione di interfacce utente. La libreria è affiancata da una demo app che permette di visualizzare i componenti in azione e testare le modifiche in tempo reale durante lo sviluppo.

NB: Questo è un boilerplate di una Libreria Angular che contiene un solo componente di Benvenuto.

## Struttura del progetto

La struttura del progetto è organizzata come segue:

```
/project
  ├── /ui-kit-abl  # Libreria Angular con tutti i componenti
  └── /demo-app                 # Applicazione demo per testare i componenti
```

### Cartella `project/ui-kit-abl`
Questa cartella contiene tutti i componenti della libreria **UI Kit LP Abl Components**. Ogni componente è progettato per essere modulare e riutilizzabile all'interno di applicazioni Angular.

### Cartella `project/demo-app`
La cartella `project/demo-app` contiene un'applicazione Angular che viene utilizzata per testare i componenti della libreria. Puoi usare questa applicazione per vedere le modifiche ai componenti in tempo reale mentre lavori sulla libreria.

## Requisiti

Prima di iniziare, assicurati di avere installato le seguenti dipendenze:

- **Node.js**: 18.17.0
- **Angular CLI**: 16.2.0

## Come iniziare

Segui questi passi per avviare il progetto:

### 1. Installazione delle dipendenze
Dopo aver clonato il repository, installa tutte le dipendenze necessarie:

```bash
npm install
```

### 2. Avvio della demo-app
Per avviare l'applicazione demo e visualizzare i componenti:

```bash
ng serve demo-app --port=4200
```

Ora puoi visitare `http://localhost:4200` nel tuo browser per vedere l'app demo.

### 3. Modifica e build della libreria
Per modificare i componenti della libreria e vedere le modifiche in tempo reale nella demo-app, utilizza il seguente comando per costruire la libreria in modalità **watch**:

```bash
ng build ui-kit-abl --watch
```

Questo comando compila la libreria e tiene traccia delle modifiche, così ogni modifica ai componenti verrà automaticamente riflessa nell'app demo.

## Comandi utili

### Build della libreria
Per effettuare una build manuale della libreria, puoi eseguire il seguente comando:

```bash
ng build ui-kit-abl
```

## Struttura della libreria

I componenti della libreria sono situati nella cartella `project/ui-kit-abl`. Ogni componente è strutturato in moduli separati, facilitando l'importazione e l'utilizzo selettivo dei componenti all'interno di altre applicazioni Angular.

Grazie per aver utilizzato la libreria **UI Kit LP Abl Components**!
