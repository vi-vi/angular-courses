import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICourseItem } from '../pages/course-list-page/components/course-item/course-item-interface';
import { COURSES } from './mock/mock-courses';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  private courses: ICourseItem[];

  constructor(private http: HttpClient) {
    this.courses = COURSES;
  }

  getList(page, count, textFragment = '') {
    return this.http.get<ICourseItem[]>(`http://localhost:3004/courses`, {
      params: {
        'start': String(page*count),
        'count': String(count),
        textFragment
      }
    });
  }

  createCourse(data) {
    return this.http.post<ICourseItem>(`http://localhost:3004/courses/`, data);
  }

  getItemById(id) {
    return this.http.get<ICourseItem>(`http://localhost:3004/courses/`+id);
    //return this.courses.find(course  =>  id === course.id);
  }

  getCopyById(id) {
    const course = this.getItemById(id);
    const copy = Object.assign({}, course);

    return copy;
  }

  updateItem(copy) {
    return this.http.put<ICourseItem>(`http://localhost:3004/courses/`+copy.id, copy);
    // const index = this.courses.findIndex(course => {
    //   return course.id === copy.id;
    // });
    // this.courses[index] = copy;
  }

  removeItem(id) {
    return this.http.delete<ICourseItem>(`http://localhost:3004/courses/`+id);
    // return this.courses = this.courses.filter(course  =>  id !== course.id);
  }
}
