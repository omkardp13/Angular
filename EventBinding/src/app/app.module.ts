import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ToggleParaComponent } from './toggle-para/toggle-para.component';

@NgModule({
  declarations: [
    AppComponent,
    ToggleParaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
