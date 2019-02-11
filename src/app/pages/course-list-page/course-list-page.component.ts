import { Component, OnInit } from '@angular/core';
import { ICourseItem } from './components/course-item/course-item-interface';
import { FilterPipe } from './filter.pipe';
import { CoursesService } from '../../services/courses.service';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: [ './course-list-page.component.css' ]
})
export class CourseListPageComponent implements OnInit {
  private filter: FilterPipe;
  courses: ICourseItem[];
  coursesToRender: ICourseItem[];
  search: string;

  constructor(
    private courseservice: CoursesService
  ) {
    this.filter = new FilterPipe();
  }

  ngOnInit() {
    this.courses = this.courseservice.getList();
    this.coursesToRender = this.courses;
    this.search = '';
  }

  filterBy(value: string) {
    this.search = value;
    this.filterApply();
  }

  filterApply() {
    this.coursesToRender = this.filter.transform(this.courses, this.search);
  }

  deleteCourse(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.courses = this.courseservice.removeItem(id);
      this.filterApply();
    }
  }
}
