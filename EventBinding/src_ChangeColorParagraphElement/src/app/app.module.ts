import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChangeParagraphColorComponent } from './change-paragraph-color/change-paragraph-color.component';

@NgModule({
  declarations: [
    AppComponent,
    ChangeParagraphColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
