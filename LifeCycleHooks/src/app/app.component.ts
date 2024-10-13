import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Add the properties
  selectedUser = { name: 'John Doe', email: 'john.doe@example.com' };
  showUserDetail = true;

  // Add the method to change user details
  changeUser() {
    this.selectedUser = { name: 'Jane Smith', email: 'jane.smith@example.com' };
  }

  // Add the method to toggle component visibility (destroy the component)
  destroyComponent() {
    this.showUserDetail = false;
  }
}
