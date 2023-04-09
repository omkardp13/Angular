import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent
{
public Message="Hello Child Component...";

Fruits = ["Apple","Banana","Mango","Grapes"];

obj = 
{
   name:"Onkar",
   age:24,
   isMarried:false
};



changeData()
{
  this.Message="Onkar Patil has changed message of child component";
}


}


