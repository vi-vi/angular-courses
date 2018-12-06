import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';
import { CourseListPageComponent } from './course-list-page.component'

// Module for global layout components like header, footer, breadcrumbs
@NgModule({
  declarations: [
    CourseListPageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports: [
    CommonModule,
    CourseListPageComponent
  ]
})
export class CourseListPageModule { }

//does not export in ngModule
export { CourseListPageComponent }
