import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private key = 'user';
  private userInfo = [{'name': 'vi', 'email': 'vivi@gmail.com'}];
  private session;

  constructor(private router: Router) { }

  login() {
    localStorage.setItem('userInfo', JSON.stringify(this.userInfo));
    localStorage.isLogged = true;
  }

  logout() {
    localStorage.removeItem('userInfo');
    localStorage.isLogged = false;
  }

  getUserInfo() {
    return JSON.parse(localStorage.getItem('userInfo'));
  }

  isAuthenticated() {
    return JSON.parse(localStorage.isLogged);
  }

  protectRoute() {
    !this.isAuthenticated() && this.router.navigate([`/login`]);
  }
}
