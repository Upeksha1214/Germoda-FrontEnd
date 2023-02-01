import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginDashBoradComponent } from './login-dash-borad.component';

describe('LoginDashBoradComponent', () => {
  let component: LoginDashBoradComponent;
  let fixture: ComponentFixture<LoginDashBoradComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginDashBoradComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginDashBoradComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
