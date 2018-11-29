import { Component, OnInit } from '@angular/core';
import { IProfile } from './profile-interface'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, IProfile {

  constructor(userInf: IProfile) {
    console.log(userInf)
  }

  ngOnInit() {
  }

}
