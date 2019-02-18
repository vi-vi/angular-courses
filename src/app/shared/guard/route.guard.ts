import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';

@Injectable()
export class RouteGuard implements CanActivate {
    constructor(
      private authservice: AuthorizationService,
      private router: Router
    ) {}

    canActivate() {

      if (!this.authservice.isAuthenticated()) {
        this.router.navigate(['/login']);
        return false;
      }

      return true;
  }
}
