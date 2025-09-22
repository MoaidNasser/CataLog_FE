import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RegisterUserModule } from '../models/register-user/register-user-module';
import { LoginUserModule } from '../models/login-user/login-user-module';
import { tap } from 'rxjs/operators';
import { jwtDecode } from 'jwt-decode';


interface JwtPayload {
  sub: string;
  role: string;
  exp: number;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = "http://localhost:8090";

  constructor(private http: HttpClient) { }

  register(regUser: RegisterUserModule) {
    return this.http.post<string>(
      `${this.baseUrl}/user/signup`,
      regUser,
      { responseType: 'text' as 'json' }
    );
  }

  login(logUser: LoginUserModule) {
    return this.http.post<string>(
      `${this.baseUrl}/auth/login`,
      logUser,
      { responseType: 'text' as 'json' }
    ).pipe(
      tap(token => {
        localStorage.setItem("jwtToken", token);
      })
    );
  }

  getToken(): string | null {
    return localStorage.getItem("jwtToken");
  }

  logout() {
    localStorage.removeItem("jwtToken");
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }

  getRole(): string | null {
    const token = this.getToken();
    if (token) {
      const decoded = jwtDecode<JwtPayload>(token);
      return decoded.role;
    }
    return null;
  }

}
