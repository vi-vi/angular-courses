import { Component, OnInit, Input } from '@angular/core';
import { ParamMap } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  clickItem: number;
  @Input() courseId: number;

   constructor(
     private router: Router
   ) { }

   ngOnInit() {

   }

   handlerClick() {
     this.router.navigate([`/courses/${this.courseId}/edit`]);
   }

}
