import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { LayoutModule } from './layout/layout.module';
import { PagesRoutingModule } from './pages/pages-routing.module';
import { CoursesService } from './services/courses.service';
import { AuthorizationService } from './services/authorization.service';

import { AuthModule } from './auth/auth.module'

// import { LoginComponent } from './pages/login/login.component';
// import { CourseListPageComponent } from './pages/course-list-page/course-list-page.component';
// import { CourseEditPageComponent } from './pages/course-edit-page/course-edit-page.component';
// import { CourseAddPageComponent } from './pages/course-add-page/course-add-page.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';
// import { CourseItemComponent } from './pages/course-list-page/course-item/course-item.component';
// import { SearchFormComponent } from './pages/course-list-page/search-form/search-form.component';
// import { CourseAddComponent } from './pages/course-list-page/course-add/course-add.component';
// import { CourseEditComponent } from './pages/course-list-page/course-edit/course-edit.component';
// import { CourseDeleteComponent } from './pages/course-list-page/course-delete/course-delete.component';
// import { LoadMoreComponent } from './pages/course-list-page/load-more/load-more.component';


@NgModule({
  declarations: [
    AppComponent
    // LoginComponent,
    // CourseListPageComponent,
    // CourseEditPageComponent,
    // CourseAddPageComponent,
    // LoginPageComponent,
    // CourseItemComponent,
    // SearchFormComponent,
    // CourseAddComponent,
    // CourseEditComponent,
    // CourseDeleteComponent,
    // LoadMoreComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    LayoutModule,
    PagesRoutingModule,
    AuthModule
  ],
  providers: [CoursesService, AuthorizationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
