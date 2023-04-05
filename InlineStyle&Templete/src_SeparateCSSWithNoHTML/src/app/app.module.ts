import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { TwoWayComponent } from './two-way/two-way.component';

import { FormsModule } from '@angular/forms';
import { InlineComponent } from './inline/inline.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    TwoWayComponent,
    InlineComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
