/*
Overall, this code defines an Angular module that declares several components and imports required modules, specifies a service to be provided to those components, and sets up the main entry point for the application.

 Angular module called AppModule. It imports and declares several components and services, and specifies that AppComponent should be used as the main entry point for the application
*/

//imports several Angular modules and components, including NgModule, BrowserModule, AppComponent, BatchListComponent, BatchDetailsComponent, and MarvellousService.

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BatchListComponent } from './batch-list/batch-list.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { MarvellousService } from './marvellous.service';



@NgModule({

  //An array of component classes that belong to this module, including AppComponent, BatchListComponent, and BatchDetailsComponent.

  declarations: [
    AppComponent,
    BatchListComponent,
    BatchDetailsComponent
  ],

  //An array of NgModule classes that this module depends on, including BrowserModule
  imports: [
    BrowserModule
  ],

  //An array of service classes that can be injected into components in this module, including MarvellousService.
  providers: [MarvellousService],

  // An array of component classes that should be used as the main entry point for the application, including AppComponent.
  bootstrap: [AppComponent]
})
export class AppModule { }

//exports the AppModule class so that it can be used in other parts of the application.