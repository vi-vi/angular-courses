import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseListPageModule, CourseListPageComponent } from './course-list-page/course-list-page.module';
import { CourseAddPageComponent } from './course-add-page/course-add-page.component';
import { CourseEditPageComponent } from './course-edit-page/course-edit-page.component';
import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from './course-list-page/components/components.module';

const appRoutes: Routes = [
  { path: 'courses', component: CourseListPageComponent},
  { path: 'login', component: LoginPageComponent},
  { path: 'create_course', component: CourseAddPageComponent}
];

// Set of page components assigned to routes
@NgModule({
  declarations: [
    LoginPageComponent,
    CourseAddPageComponent,
    CourseEditPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CourseListPageModule,
    SharedModule,
    ComponentsModule,
    FormsModule
  ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
