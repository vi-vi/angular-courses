import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { AuthorizationService } from '../../services/authorization.service';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {
  private course;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private courseservice: CoursesService
  ) { }

  ngOnInit() {
    let id;
    this.route.paramMap.subscribe(params => {
      id = +params.get('id');
    });
    this.course = this.courseservice.getCopyById(id);
  }

  handlerSave() {
    this.courseservice.updateItem(this.course);
    this.router.navigate(['/courses']);
  }

  handlerCancel() {
    this.router.navigate(['/courses']);
  }
}
