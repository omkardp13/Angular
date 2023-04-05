import { Component } from '@angular/core';

@Component({
  selector: 'app-inline',
  template: `<h1> Onkar Patil </h1><br>
             <h2 class="title">Onkar Dattatray Patil</h2>
             `,
  styles: [`
  h1{
    color:red;
  }

  .title
  {
    color:green;
    font-size:30px;
  }
  `]
})
export class InlineComponent {

}
