import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrangeTheOnlineClassComponent } from './arrange-the-online-class.component';

describe('ArrangeTheOnlineClassComponent', () => {
  let component: ArrangeTheOnlineClassComponent;
  let fixture: ComponentFixture<ArrangeTheOnlineClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrangeTheOnlineClassComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrangeTheOnlineClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
