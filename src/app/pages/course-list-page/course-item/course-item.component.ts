import { Component, OnInit } from '@angular/core';
import { ICourseItem } from './course-item-interface'

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit, ICourseItem {

  constructor(course: ICourseItem) {
    console.log(course)
  }

  ngOnInit() {
  }

}
