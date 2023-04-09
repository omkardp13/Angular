import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
 public MyMessage="Onkar Patil";

public Fruits:string[]=["Apple","Mango","Banana","Grapes"];

public obj=
{
  name:"Onkar",
  age:24,
  isMarried:false
};

 changeData()
 {
   this.MyMessage="Ramesh Patil";
 }

public MyChildMessage:string="";

}
