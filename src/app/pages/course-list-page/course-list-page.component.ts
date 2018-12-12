import { Component, OnInit } from '@angular/core';
import { ICourseItem } from './components/course-item/course-item-interface'
import { COURSES } from './mock/mock-courses';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
  courses: ICourseItem[];

  constructor() { }

  ngOnInit() {
    this.courses = COURSES;
  }

  deleteCourse(id: number) {
    console.log(id);
  }
}
