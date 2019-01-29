import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  login(event) {
    event.preventDefault();
    this.authorizationService.login();
    console.log('logged in successfully', localStorage);
  }

}
