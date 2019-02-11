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

  getItemById(id) {
    return this.courses.find(course  =>  id === course.id);
  }

  getCopyById(id) {
    const course = this.getItemById(id);
    const copy = Object.assign({}, course);

    return copy;
  }

  updateItem(copy) {
    const index = this.courses.findIndex(course => {
      return course.id === copy.id;
    });
    this.courses[index] = copy;
  }

  removeItem(id) {
    return this.courses = this.courses.filter(course  =>  id !== course.id);
  }
}
