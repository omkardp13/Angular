/*
Overall, this code defines an Angular component that retrieves a list of batches from a MarvellousService instance and assigns it to a public property called Batches. This component can be used to display a list of batches in an Angular application.

*/

import { Component,OnInit } from '@angular/core';
import { MarvellousService } from '../marvellous.service';

//imports the Component and OnInit classes from the @angular/core package, as well as the MarvellousService class from the '../marvellous.service' module.

@Component({
  selector: 'app-batch-list',
  templateUrl: './batch-list.component.html',
  styleUrls: ['./batch-list.component.css']
})
// Angular component called BatchListComponent with a selector of 'app-batch-list'. It also specifies the HTML template and CSS styles for the component.

//the BatchListComponent class, which implements the OnInit interface. The class has a public property called Batches, which is an array of any type.
export class BatchListComponent implements OnInit{

  public Batches:any=[];

   //The constructor of the class takes a MarvellousService instance as an argument, but it does not perform any action with it.
    constructor(public mobj:MarvellousService)
    {     

    }

    //The ngOnInit method is called when the component is initialized, and it assigns the value returned by the GetBatchDetails method of the MarvellousService instance to the Batches property.
    ngOnInit()
    {
      this.Batches=this.mobj.GetBatchDetails();      
    }
}
