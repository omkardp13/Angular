/*

 This code defines an Angular service called MarvellousService using the @Injectable decorator

*/

/*

This code imports the Injectable decorator from the @angular/core module, which is used to indicate that the class can be used as a provider for the dependency injection system.

*/

import { Injectable } from '@angular/core';

//Applies the @Injectable decorator to the MarvellousService class and sets the providedIn property to 'root'. This means that the service is provided at the root level, which makes it available to the entire application.

@Injectable({
  providedIn: 'root'
})


//The MarvellousService class, which has one public method called GetBatchDetails(). This method returns an array of objects, each of which represents a batch and has properties for the batch name, fees, and duration.

export class MarvellousService 
{

  public GetBatchDetails()
  {
    return  [
      {"Name":"PPA","Fess":18000,"Duration":"3.5 Months"},

      {"Name":"LB","Fess":18200,"Duration":"3 Months"},

     {"Name":"Angular","Fess":18500,"Duration":"4 Months"}
    ];
  }

  //The constructor is empty, but it is required because the @Injectable decorator is used. When this service is injected into a component, the constructor is called to create a new instance of the service. Since there are no parameters in the constructor, there is nothing to initialize.
  
  constructor()
  { 

  }

}
