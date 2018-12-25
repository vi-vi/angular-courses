import { Component, OnInit } from '@angular/core';
import { ICourseItem } from './components/course-item/course-item-interface'
import { COURSES } from './mock/mock-courses';
import { FilterPipe } from './filter.pipe'

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: ['./course-list-page.component.css']
})
export class CourseListPageComponent implements OnInit {
  private filter: FilterPipe;
  courses: ICourseItem[];
  coursesToRender: ICourseItem[];
  search: string;

  constructor() {
    this.filter = new FilterPipe();
  }

  ngOnInit() {
    this.courses = COURSES;
    this.coursesToRender = COURSES;
    this.search = '';
  }

  filterBy(value: string) {
    this.search = value;
    this.coursesToRender = this.filter.transform(this.courses, value);
  }

  deleteCourse(id: number) {
    console.log(id);
  }
}
