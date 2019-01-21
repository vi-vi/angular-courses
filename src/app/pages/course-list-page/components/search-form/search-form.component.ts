import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  // @Input search: string;
  @Output() filterByEvent = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  filterBy( value: string ) {
    this.filterByEvent.emit(value);
    // this.search = value;
    console.log(value);
  }

}
