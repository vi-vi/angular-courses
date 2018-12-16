import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile-interface'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userInf: IProfile;

  constructor() {
  }

  ngOnInit() {
    // mocked data
    this.userInf = {
      id: 1,
      firstName: 'Sherlock',
      lastName: 'Holmes'
    }

    console.log('ProfileComponent', this.userInf)
  }

}
