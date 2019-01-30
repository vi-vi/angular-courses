import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
