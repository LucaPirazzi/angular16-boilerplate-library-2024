# Guida all'Installazione della Libreria ui-kit-abl

Questa guida ti accompagnerà attraverso i passaggi necessari per installare e utilizzare la libreria `ui-kit-abl` in un nuovo progetto Angular.

| Package                         | Version   |
|---------------------------------|-----------|
| @angular-devkit/architect       | 0.1602.16 |
| @angular-devkit/build-angular   | 16.2.16   |
| @angular-devkit/core            | 16.2.16   |
| @angular-devkit/schematics      | 16.2.16   |
| @angular/cli                    | 16.2.16   |
| @schematics/angular             | 16.2.16   |
| ng-packagr                      | 16.2.3    |
| rxjs                            | 7.8.1     |
| typescript                      | 5.1.6     |
| zone.js                         | 0.13.3    |
| node.js                         | 18.17.0   |

## 1. Crea un Nuovo Progetto Angular

Se non hai già un progetto Angular, creane uno nuovo utilizzando il CLI di Angular:

```bash
ng new my-app
```

Segui le istruzioni per completare il setup (puoi scegliere SCSS o mantenere CSS come predefinito).

## 2. Spostati nel Nuovo Progetto

Naviga nella directory del progetto appena creato:

```bash
cd my-app
```

## 3. Installa la Libreria e Bootstrap

Installa la libreria `ui-kit-abl` e Bootstrap come dipendenze del tuo progetto:

```bash
npm install ui-kit-abl bootstrap
```

## 4. Configura Bootstrap nel Progetto

Per utilizzare Bootstrap, importa i suoi stili globali nel tuo progetto Angular. Apri il file `angular.json` e aggiungi il percorso del file CSS di Bootstrap sotto la sezione `styles`.

Trova la sezione `styles` in `angular.json`:

```json
"styles": [
   "node_modules/bootstrap/dist/css/bootstrap.min.css",
   "src/styles.css"
],
```

Trova la sezione `scripts` in `angular.json`:

```json
"scripts": [
  "node_modules/@popperjs/core/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js"
],
```

Se utilizzi SCSS, sostituisci `src/styles.css` con `src/styles.scss`.

## 5. Importa la Libreria nel Tuo Modulo

Apri il file `src/app/app.module.ts` e importa il modulo della tua libreria:

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// Importa il modulo della tua libreria
import { UiKitAblModule } from 'ui-kit-abl';  // Modifica con il nome corretto del modulo

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiKitAblModule // Aggiungi il modulo qui
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

Assicurati di importare il modulo corretto. Puoi consultare il file `public-api.ts` della libreria per confermare il nome.

## 6. Usa i Componenti della Libreria

Ora puoi utilizzare i componenti della libreria. Apri il file `src/app/app.component.html` e inserisci uno dei componenti disponibili.

Ad esempio, il componente di benvenuto `HelloUiKit`, usalo in questo modo:

```html
<hello-ui-kit></hello-ui-kit>
```

## 7. Avvia l'Applicazione

Salva le modifiche e avvia l'applicazione Angular con il comando:

```bash
ng serve
```

## 8. Verifica

Visita `http://localhost:4200` nel tuo browser per verificare che il componente della tua libreria venga renderizzato correttamente.

## Riepilogo dei Passaggi

1. Crea un nuovo progetto Angular.
2. Installa la libreria `ui-kit-abl` e Bootstrap.
3. Configura Bootstrap nel file `angular.json`.
4. Importa il modulo della libreria nel `AppModule`.
5. Usa i componenti della libreria nel tuo template HTML.
