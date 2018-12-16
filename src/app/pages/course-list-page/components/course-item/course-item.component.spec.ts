import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { Component, DebugElement, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CourseItemComponent } from './course-item.component';

////// Test Host Component //////
@Component({
template: `
  <app-course-item
    [courseItem]="course" (deleteEvent)="onDeleted($event)">
  </app-course-item>`
})
class TestHostComponent {
  public course = {
    id: 1,
    title: 'Course 1',
    creationDate: 1,
    duration: 1,
    description: 'test'
  };
  public deleteCourseItemId: number;

  public onDeleted(id: number) {
    this.deleteCourseItemId = id;
    console.log('delete' ,this.deleteCourseItemId);
  }
}


describe('CourseItemComponent', () => {
  let testHost: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;
  let testCourse = {
    id: 1,
    title: 'Course 1',
    creationDate: 1,
    duration: 1,
    description: 'test'
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, TestHostComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should remove course element', () => {
    fixture.detectChanges();
    const deleteBtn = fixture.debugElement.query(By.css('.btn'));
    deleteBtn.triggerEventHandler('click', null);

    expect(testHost.deleteCourseItemId).toEqual(testCourse.id);
  });

  it('should display course title', () => {
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const debugTitleEl = debugElement.query(By.css('.card-header'));
    const titleEl = debugTitleEl.nativeElement;
    expect(titleEl.textContent).toContain(testCourse.title);
  });

  it('should display course creationDate', () => {
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const debugTitleEl = debugElement.query(By.css('.date'));
    const dateEl = debugTitleEl.nativeElement;
    expect(dateEl.textContent).toContain(testCourse.creationDate);
  });

  it('should display course duration', () => {
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const debugTitleEl = debugElement.query(By.css('.duration'));
    const durationEl = debugTitleEl.nativeElement;
    expect(durationEl.textContent).toContain(testCourse.duration);
  });

  it('should display course description', () => {
    fixture.detectChanges();
    const debugElement: DebugElement = fixture.debugElement;
    const debugTitleEl = debugElement.query(By.css('.description'));
    const descriptionEl = debugTitleEl.nativeElement;
    expect(descriptionEl.textContent).toContain(testCourse.description);
  });
});
