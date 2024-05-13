import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}
  
  registerUser(regValue: any) {
    return this.http.post('http://localhost:3000/user', regValue);
  }
  getUser() {
    return this.http.get('http://localhost:3000/user');
  }
}
