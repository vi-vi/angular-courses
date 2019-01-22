import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchFormComponent } from './search-form/search-form.component';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseItemComponent } from './course-item/course-item.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { LoadMoreComponent } from './load-more/load-more.component';
import { CourseBorderColorDirective } from './course-item/course-highlight.directive';
import { DurationPipe } from './course-item/duration.pipe';

// Module for global layout components like header, footer, breadcrumbs
@NgModule({
  declarations: [
    SearchFormComponent,
    CourseAddComponent,
    CourseItemComponent,
    CourseEditComponent,
    LoadMoreComponent,
    CourseBorderColorDirective,
    DurationPipe
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    SearchFormComponent,
    CourseAddComponent,
    CourseItemComponent,
    CourseEditComponent,
    LoadMoreComponent
  ]
})
export class ComponentsModule { }
