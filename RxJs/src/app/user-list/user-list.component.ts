// user-list.component.ts
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <h2>User List</h2>
    <button (click)="loadUsers()">Reload Users</button>
    <ul>
      <li *ngFor="let user of users">{{ user.name }} - {{ user.email }}</li>
    </ul>
  `,
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUsers(); // Load users on component initialization
  }

  loadUsers(): void {
    // Subscribe to the observable returned by the UserService
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log('Users loaded:', this.users);
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
