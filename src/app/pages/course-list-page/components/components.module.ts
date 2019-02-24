import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { CourseBorderColorDirective } from './course-item/course-highlight.directive';
import { SharedModule } from '../../../shared/shared.module';

// Module for global layout components like header, footer, breadcrumbs
@NgModule({
  declarations: [
    SearchFormComponent,
    CourseAddComponent,
    CourseItemComponent,
    CourseEditComponent,
    CourseBorderColorDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    CommonModule,
    SearchFormComponent,
    CourseAddComponent,
    CourseItemComponent,
    CourseEditComponent
  ]
})
export class ComponentsModule { }
