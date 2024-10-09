2. Reactive Forms (Model-Driven Forms)

Description: 
1.Reactive forms provide greater control and are more flexible for complex form handling. 
2.Form creation and validation are done in the component class using form control models. This method is more explicit and scalable for large forms.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Key Features:

1.More control over form validation, updates, and event handling.
2.Form fields are created and managed programmatically using FormControl, FormGroup, and FormArray.
3.Form validation is handled via reactive form validation techniques.
4.Suitable for complex forms, where you need fine control over the form's structure and behavior.

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Example:

import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  template: `
    <form [formGroup]="loginForm" (ngSubmit)="onSubmit()">
      <input type="text" formControlName="username">
      <input type="password" formControlName="password">
      <button type="submit" [disabled]="!loginForm.valid">Submit</button>
    </form>
  `
})
export class LoginFormComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  onSubmit() {
    console.log(this.loginForm.value);
  }
}

------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
