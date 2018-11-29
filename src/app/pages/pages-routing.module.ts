import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseListPageComponent } from './course-list-page/course-list-page.component'
import { LoginPageComponent } from './login-page/login-page.component'

const appRoutes: Routes = [
  { path: 'courses', component: CourseListPageComponent},
  { path: 'login', component: LoginPageComponent}
];

// Set of page components assigned to routes
@NgModule({
  declarations: [
    CourseListPageComponent,
    LoginPageComponent
  ],
  imports: [ RouterModule.forRoot(appRoutes) ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
