import { Component } from '@angular/core';

@Component({
  selector: 'app-alert-message',
  templateUrl: './alert-message.component.html',
  styleUrls: ['./alert-message.component.css']
})
export class AlertMessageComponent {

  firstName: string="";
  lastName: string="";

  onSubmit() {
    alert(`First Name: ${this.firstName}\nLast Name: ${this.lastName}`);
  }

}
