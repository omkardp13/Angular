import { Component,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent
{

@Input() public MessageFromParent:string="";

@Input() public MyParentArray:string[]=[];

@Input() public MyParentObj:any={};

@Output() public MyChildEvent=new EventEmitter();

SendData()
{
this.MyChildEvent.emit("Message From Child");
}

}
