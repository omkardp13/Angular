// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/users'; // Fake REST API for users

  constructor(private http: HttpClient) { }

  // Fetch the list of users as an Observable
  getUsers(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
