import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(private router: Router, private http: HttpClient) { }

  login(login, password) {
    // return this.http.post<ICourseItem[]>(`http://localhost:3004/login`, );

    this.http.post(`http://localhost:3004/auth/login`, {
      login,
      password
    }).subscribe((response:any) => {
      localStorage.setItem('userToken', JSON.stringify(response.token));
      this.router.navigate([`/courses`])
    })
  }

  logout() {
    this.http.get(`http://localhost:3004/auth/logout`).subscribe((response) => {
      localStorage.removeItem('userToken');
    })
  }

  getUserToken() {
    return JSON.parse(localStorage.getItem('userToken'));
  }

  isAuthenticated() {
    return !!this.getUserToken();
  }

  protectRoute() {
    !this.isAuthenticated() && this.router.navigate([`/login`]);
  }
}
