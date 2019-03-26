import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthorizationService } from './authorization.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(
    private http: HttpClient,
    private authservice: AuthorizationService
  ) {}

  getProfile(page, count, textFragment = '') {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.authservice.getUserToken()
      })
    }

    return this.http.post<any>(`http://localhost:3004/auth/userinfo`, null, httpOptions);
  }

}
