// user-registration.component.ts
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent {
  // Define the FormGroup
  registrationForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(3)]), // Validators for name
    email: new FormControl('', [Validators.required, Validators.email]), // Validators for email
    password: new FormControl('', [Validators.required, Validators.minLength(6)]), // Validators for password
  });

  // Method to handle form submission
  onSubmit() {
    console.log(this.registrationForm.value);
  }

  // Helper methods to access form controls and their validation status
  get name() {
    return this.registrationForm.get('name');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get password() {
    return this.registrationForm.get('password');
  }
}
