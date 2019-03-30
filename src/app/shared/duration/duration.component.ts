import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';


@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  duration = new FormControl('');
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
