import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable()
export class RouteGuard implements CanActivate {
    constructor(
      private authservice: AuthorizationService,
      private router: Router
    ) {}

    canActivate(): Observable<boolean> {
      if (!this.authservice.isAuthenticated()) {
        this.router.navigate(['/login']);
        return of(false);
      }

      return of(true);
  }
}
