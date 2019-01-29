import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationservice: AuthorizationService) { }

  ngOnInit() {
  }

  logOut() {
    this.authorizationservice.logout();
    console.log('Its Logout!');
  }
}
