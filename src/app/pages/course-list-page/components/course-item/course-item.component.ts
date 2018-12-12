import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourseItem } from './course-item-interface'

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {

  @Input() courseItem: ICourseItem;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  deleteHandler(id: number) {
    this.deleteEvent.emit(id)
  }
}
