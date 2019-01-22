import { Injectable } from '@angular/core';
import { ICourseItem } from '../pages/course-list-page/components/course-item/course-item-interface';
import { COURSES } from './mock/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: ICourseItem[];

  constructor() {
    this.courses = COURSES;
  }

  getList() {
    return this.courses;
  }

  createCourse() {}

  getItemById() {}

  updateItem() {}

  removeItem(id) {
    return this.courses = this.courses.filter(course  =>  id !== course.id);
  }
}
