import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlertMessageComponent } from './alert-message/alert-message.component';
import { TwoWayComponent } from './two-way/two-way.component';

import { FormsModule } from '@angular/forms';
import { InlineComponent } from './inline/inline.component';
import { Inline1Component } from './inline1/inline1.component';

@NgModule({
  declarations: [
    AppComponent,
    AlertMessageComponent,
    TwoWayComponent,
    InlineComponent,
    Inline1Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
