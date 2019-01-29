import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.component.html',
  styleUrls: ['./course-edit.component.css']
})
export class CourseEditComponent implements OnInit {
  clickItem: number;

   constructor() {
       console.log(`new - clickItem is ${this.clickItem}`);
   }

   ngOnInit() {
     this.clickItem = 10;
       console.log(`ngOnInit  - clickItem is ${this.clickItem}`);
   }

   handlerClick() {
     console.log(this.clickItem += 1);
   }

}
