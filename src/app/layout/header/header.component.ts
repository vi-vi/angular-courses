import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ProfileService } from '../../services/profile.service'
import { Router } from '@angular/router';

import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login, Logout } from '../../auth/auth.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private name = ''
  isAuthenticated$: Observable<boolean>;

  constructor(
    private authorizationservice: AuthorizationService,
    private profileservice: ProfileService,
    private router: Router,
    private store: Store<{ isAuthenticated: boolean }>
  ) {
    this.isAuthenticated$ = store.pipe(select('isAuthenticated'));
  }

  ngOnInit() {
  }

  logOut() {
    this.authorizationservice.logout();
    this.router.navigate([`/login`]);
  }

  TEST_login() {
    this.store.dispatch(new Login({
      login: 'asd',
      password: 'sdfsdf'
    }));
  }

  TEST_logout() {
    this.store.dispatch(new Logout({}));

  }
}
