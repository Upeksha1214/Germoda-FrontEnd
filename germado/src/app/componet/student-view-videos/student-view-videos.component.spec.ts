import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentViewVideosComponent } from './student-view-videos.component';

describe('StudentViewVideosComponent', () => {
  let component: StudentViewVideosComponent;
  let fixture: ComponentFixture<StudentViewVideosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentViewVideosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentViewVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
