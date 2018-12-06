import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component'
import { CourseListPageModule, CourseListPageComponent } from './course-list-page/course-list-page.module'

const appRoutes: Routes = [
  { path: 'courses', component: CourseListPageComponent},
  { path: 'login', component: LoginPageComponent}
];

// Set of page components assigned to routes
@NgModule({
  declarations: [
    LoginPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CourseListPageModule
  ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
