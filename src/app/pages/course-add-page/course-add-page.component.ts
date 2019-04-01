import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorizationService } from '../../services/authorization.service';
import { CoursesService } from '../../services/courses.service'
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';


@Component({
  selector: 'app-course-add-page',
  templateUrl: './course-add-page.component.html',
  styleUrls: ['./course-add-page.component.css']
})
export class CourseAddPageComponent implements OnInit {
  addForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.maxLength(50)]),
    description: new FormControl('', [Validators.required, Validators.maxLength(500)]),
    authors: new FormControl(20, Validators.required)
  });

  public formData = {
    name: '',
    description: '',
    date: '',
    length: 0
  };

  constructor(
    private courseservice: CoursesService,
    private router: Router
  ) { }

  ngOnInit() {}

  handlerClick() {
    this.courseservice.createCourse(this.formData).subscribe(
      () => {
        this.router.navigate(['/courses'])
      }
    )
  }

}
