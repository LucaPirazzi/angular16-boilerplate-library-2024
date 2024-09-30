import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiKitAblModule } from 'ui-kit-abl';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UiKitAblModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
