import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from '../../services/courses.service';
import { AuthorizationService } from '../../services/authorization.service';
import { ICourseItem } from '../course-list-page/components/course-item/course-item-interface';

@Component({
  selector: 'app-course-edit-page',
  templateUrl: './course-edit-page.component.html',
  styleUrls: ['./course-edit-page.component.css']
})
export class CourseEditPageComponent implements OnInit {
  private course: ICourseItem;
  private isLoading: boolean;
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

    this.isLoading = true;
    this.courseservice.getItemById(id).subscribe(
      (data: ICourseItem) => {
        this.course = data
        this.isLoading = false;
      }
    );
  }

  handlerSave() {
    this.courseservice.updateItem(this.course).subscribe(
      () => this.router.navigate(['/courses'])
    );
  }

  handlerCancel() {
    this.router.navigate(['/courses']);
  }
}
