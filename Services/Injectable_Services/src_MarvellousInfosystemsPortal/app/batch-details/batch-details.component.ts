/*
Overall, this code defines an Angular component that uses a service to get data and display it in the template. The service is injected into the component using dependency injection, and the component implements the OnInit interface to initialize its data when the component is created.

*/

import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

//imports the Component and OnInit classes from the '@angular/core' module, as well as the MarvellousService class from a custom service file called 'marvellous.service.ts'.

//BatchDetailsComponent as an Angular component, and specifies its selector, template URL, and style URLs.

@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})

//BatchDetailsComponent class, which implements the OnInit interface. The class has a public Batches property, which is an array of any type.

export class BatchDetailsComponent implements OnInit
 {
  
   public Batches:any=[];

   //The class has a constructor that takes an instance of the MarvellousService as an argument. The service is injected into the component using Angular's dependency injection mechanism.

    constructor(public mobj:MarvellousService)
    {     

    }
   
    //The class also has an ngOnInit() method, which is called when the component is initialized. In the ngOnInit() method, the component calls the GetBatchDetails() method of the MarvellousService to get an array of batch details, and assigns it to the Batches property.

    ngOnInit()
    {
      this.Batches=this.mobj.GetBatchDetails();      
    }
}
