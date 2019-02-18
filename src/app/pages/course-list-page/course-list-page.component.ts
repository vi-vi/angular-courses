import { Component, OnInit } from '@angular/core';
import { ICourseItem } from './components/course-item/course-item-interface';
import { FilterPipe } from './filter.pipe';
import { CoursesService } from '../../services/courses.service';
import { AuthorizationService } from '../../services/authorization.service';

const COURSES_PER_PAGE = 3;

@Component({
  selector: 'app-course-list-page',
  templateUrl: './course-list-page.component.html',
  styleUrls: [ './course-list-page.component.css' ]
})
export class CourseListPageComponent implements OnInit {
  private filter: FilterPipe;
  private page: number;
  courses: ICourseItem[];
  coursesToRender: ICourseItem[];
  search: string;

  constructor(
    private courseservice: CoursesService
  ) {
    this.filter = new FilterPipe();
    this.courses = this.coursesToRender = [];
    this.search = '';
  }

  ngOnInit() {
    this.page = 0;
    this.loadCourses();
  }

  resetPage() {
    this.page = 0;
  }

  loadCourses() {
    this.page = 0;

    this.courseservice.getList(this.page, COURSES_PER_PAGE, this.search).subscribe(
      (data: ICourseItem[]) => {
        this.courses = data;
        this.coursesToRender = this.courses;
      }
    );

  }

  loadMoreCourses() {
    this.page++;

    this.courseservice.getList(this.page, COURSES_PER_PAGE, this.search).subscribe(
      (data: ICourseItem[]) => {
        this.courses = [ ...this.courses, ...data ];
        this.coursesToRender = this.courses;
      }
    );

  }


  filterBy(value: string) {
    this.search = value;
    this.resetPage();
    this.loadCourses();
  }

  deleteCourse(id: number) {
    if (confirm('Do you really want to delete this course?')) {
      this.courseservice.removeItem(id).subscribe(
        () => {
          this.loadCourses();
          // this.filterApply();
        }
      );

    }
  }
}
