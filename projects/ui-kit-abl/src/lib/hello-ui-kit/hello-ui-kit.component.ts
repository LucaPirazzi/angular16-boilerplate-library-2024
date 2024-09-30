import { Component, Input } from '@angular/core';
@Component({
  selector: 'hello-ui-kit',
  templateUrl: './hello-ui-kit.component.html',
  styleUrls: ['./hello-ui-kit.component.css']
})
export class HelloUiKitComponent {
  @Input() img: string = '';
  title: string = 'Benvenuto nel tuo UI kit';
  message: string = 'Inizia a progettare i tuoi componenti!';
}
