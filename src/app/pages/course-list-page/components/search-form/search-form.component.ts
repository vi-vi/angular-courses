import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { SearchTokenSubject } from '../../../../shared/observable/search-token-obs'

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  onKeyUp( value: string ) {
    SearchTokenSubject.next(value);
  }

}
