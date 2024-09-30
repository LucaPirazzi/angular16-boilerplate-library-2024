import { Component } from '@angular/core';

@Component({
  selector: 'hello-ui-kit',
  templateUrl: './hello-ui-kit.component.html',
  styleUrls: ['./hello-ui-kit.component.css']
})
export class HelloUiKitComponent {
  message: string = 'Benvenuto nel tuo UI Kit!';
}
