import { Component } from '@angular/core';

@Component({
  selector: 'app-toggle-para',
  templateUrl: './toggle-para.component.html',
  styleUrls: ['./toggle-para.component.css']
})
export class ToggleParaComponent {

  public isVisible=false;

  public ToggleParagraph()
  {
    this.isVisible=!this.isVisible;
  }
}
