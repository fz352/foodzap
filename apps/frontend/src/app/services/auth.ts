import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'fake_session';

  constructor(private router: Router) {}

  login(username: string, password: string): boolean {
    // login fake: aceita apenas admin / 123
    if (username === 'admin' && password === '123') {
      localStorage.setItem(this.tokenKey, 'true');
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) === 'true';
  }
}
