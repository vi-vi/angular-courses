import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {
  private name;
  @Input() courseInf: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  checkRoute() {
    return (this.router.url === '/courses') && (this.name = 'Courses') ||
    (this.router.url === `/courses/${this.courseInf.id}/edit`) && (this.name = `Courses / ${this.courseInf && this.courseInf.name}`);
  }

}
