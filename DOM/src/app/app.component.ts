import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('myButton') button!: ElementRef;

  constructor(private renderer: Renderer2) {}

  changeButton() {
    this.renderer.setStyle(this.button.nativeElement, 'background-color', 'blue');
    this.renderer.setProperty(this.button.nativeElement, 'innerText', 'Clicked!');
  }
}
