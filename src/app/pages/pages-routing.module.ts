import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './login-page/login-page.component';
import { CourseListPageModule, CourseListPageComponent } from './course-list-page/course-list-page.module';
import { CourseAddPageComponent } from './course-add-page/course-add-page.component';
import { CourseEditPageComponent } from './course-edit-page/course-edit-page.component';
import { SharedModule } from './../shared/shared.module';
import { ComponentsModule } from './course-list-page/components/components.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LayoutModule } from '../layout/layout.module';
import { RouteGuard } from '../shared/guard/route.guard'


const appRoutes: Routes = [
  { path: '', redirectTo: '/courses', pathMatch: 'full' },
  { path: 'courses', component: CourseListPageComponent, canActivate: [ RouteGuard ] },
  { path: 'login', component: LoginPageComponent},
  { path: 'new', component: CourseAddPageComponent, canActivate: [ RouteGuard ] },
  { path: 'courses/:id/edit', component: CourseEditPageComponent, canActivate: [ RouteGuard ] },
  { path: '**', component: PageNotFoundComponent }
];

// Set of page components assigned to routes
@NgModule({
  declarations: [
    LoginPageComponent,
    CourseAddPageComponent,
    CourseEditPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    CourseListPageModule,
    SharedModule,
    ComponentsModule,
    FormsModule,
    ReactiveFormsModule,
    LayoutModule
  ],
  providers: [ RouteGuard ],
  exports: [ RouterModule ]
})

export class PagesRoutingModule { }
