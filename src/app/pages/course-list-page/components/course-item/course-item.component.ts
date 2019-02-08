import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { ICourseItem } from './course-item-interface';


@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseItemComponent implements OnInit {
  private isActive = false;

  @Input() courseItem: ICourseItem;
  @Output() deleteEvent = new EventEmitter<number>();

  constructor() {
 }

  ngOnInit() {

  }

  activeStar(e) {
    this.isActive = !this.isActive;
  }

  deleteHandler(id: number) {
    this.deleteEvent.emit(id);
  }
}
