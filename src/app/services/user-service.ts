import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserModule } from '../models/register-user/register-user-module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl = "http://localhost:8090";

  constructor(private http: HttpClient) { }

  register(user: RegisterUserModule) {
    return this.http.post<string>(`${this.baseUrl}/user/signup`, user, { responseType: 'text' as 'json' });
  }
}
