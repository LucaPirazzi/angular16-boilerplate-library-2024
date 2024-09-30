import { NgModule } from '@angular/core';
import { HelloUiKitComponent } from './hello-ui-kit/hello-ui-kit.component';
import { UiKitAblComponents } from './ui-kit-abl.component';

@NgModule({
  declarations: [
    UiKitAblComponents,
    HelloUiKitComponent
  ],
  imports: [
  ],
  exports: [
    UiKitAblComponents,
    HelloUiKitComponent
  ]
})
export class UiKitAblModule { }
