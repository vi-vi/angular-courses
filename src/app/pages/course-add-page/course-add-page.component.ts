import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit {
  public formData = {
    title: '',
    description: '',
    date: '',
    duration: ''
  };

  constructor() { }

  ngOnInit() {}

  handlerClick() {
    console.log('click');
  }

}
