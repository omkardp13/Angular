// user-registration.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {

  // Define a user model
  user = {
    name: '',
    email: '',
    password: ''
  };

  // Track form submission status
  submitted = false;

  constructor() { }

  // Handle form submission
  onSubmit(form: any): void {
    this.submitted = true;
    console.log('Form Data: ', form.value);
  }
}
