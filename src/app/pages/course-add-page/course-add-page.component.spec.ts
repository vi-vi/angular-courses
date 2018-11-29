import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseAddPageComponent } from './course-add-page.component';

describe('CourseAddPageComponent', () => {
  let component: CourseAddPageComponent;
  let fixture: ComponentFixture<CourseAddPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseAddPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
