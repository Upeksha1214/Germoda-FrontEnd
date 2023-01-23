import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StuViewFashionBlocksComponent } from './stu-view-fashion-blocks.component';

describe('StuViewFashionBlocksComponent', () => {
  let component: StuViewFashionBlocksComponent;
  let fixture: ComponentFixture<StuViewFashionBlocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StuViewFashionBlocksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StuViewFashionBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
