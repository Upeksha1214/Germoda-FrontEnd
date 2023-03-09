import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignformWatchingVideoComponent } from './signform-watching-video.component';

describe('SignformWatchingVideoComponent', () => {
  let component: SignformWatchingVideoComponent;
  let fixture: ComponentFixture<SignformWatchingVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignformWatchingVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignformWatchingVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
