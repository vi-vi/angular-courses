import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private authorizationservice: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  logOut() {
    this.authorizationservice.logout();
    this.router.navigate([`/login`]);
  }
}
