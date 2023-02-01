import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDashBoradComponent } from './student-dash-borad.component';

describe('StudentDashBoradComponent', () => {
  let component: StudentDashBoradComponent;
  let fixture: ComponentFixture<StudentDashBoradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentDashBoradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentDashBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
