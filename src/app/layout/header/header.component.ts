import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { ProfileService } from '../../services/profile.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private name = ''

  constructor(
    private authorizationservice: AuthorizationService,
    private profileservice: ProfileService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authorizationservice.logout();
    this.router.navigate([`/login`]);
  }
}
