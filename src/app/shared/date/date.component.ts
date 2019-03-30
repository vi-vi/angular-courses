import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';


@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {
  date = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
