import { Component } from '@angular/core';

@Component({
  selector: 'app-change-paragraph-color',
  templateUrl: './change-paragraph-color.component.html',
  styleUrls: ['./change-paragraph-color.component.css']
})
export class ChangeParagraphColorComponent {

  public Mycolor="green"
  public ChangeColor()
  { 
        
      this.Mycolor="red";
  }
}
