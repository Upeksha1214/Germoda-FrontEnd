import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassSheduleComponent } from './class-shedule.component';

describe('ClassSheduleComponent', () => {
  let component: ClassSheduleComponent;
  let fixture: ComponentFixture<ClassSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClassSheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClassSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
