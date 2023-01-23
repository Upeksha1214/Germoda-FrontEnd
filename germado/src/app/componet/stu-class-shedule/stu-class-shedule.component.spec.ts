import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuClassSheduleComponent } from './stu-class-shedule.component';

describe('StuClassSheduleComponent', () => {
  let component: StuClassSheduleComponent;
  let fixture: ComponentFixture<StuClassSheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuClassSheduleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuClassSheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
