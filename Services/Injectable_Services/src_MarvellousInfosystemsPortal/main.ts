//This code initializes the Angular application by bootstrapping the AppModule.


import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// imports the platformBrowserDynamic() function from the platform-browser-dynamic package. This function is used to compile and launch the Angular application in the browser.

import { AppModule } from './app/app.module';

//imports the AppModule class from the app.module.ts file. This class defines the root module of the Angular application and contains the metadata that tells Angular how to compile and run the application.


// calls the bootstrapModule() method on the platformBrowserDynamic() function to launch the Angular application with the AppModule. This method compiles the application and initializes the root component.

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

  //catches any errors that occur during the bootstrap process and logs them to the console using console.error(). This helps to debug any issues that may arise during the application launch.