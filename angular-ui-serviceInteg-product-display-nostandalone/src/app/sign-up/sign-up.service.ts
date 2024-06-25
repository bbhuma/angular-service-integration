// src/app/services/user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/signup-user.model';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';  // Adjust the URL as needed

  constructor(private http: HttpClient) { }

  signUp(user: User): Observable<User> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>(`${this.apiUrl}/signup`, user, { headers });
  }
}
