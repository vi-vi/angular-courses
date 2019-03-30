import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  private login: string;
  private password: string;

  loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl()
  });


  constructor(
    private authorizationService: AuthorizationService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginHandler(event) {
    event.preventDefault();
    this.authorizationService.login(this.login, this.password);
    this.router.navigate([`/courses`]);
  }

}
