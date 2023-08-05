import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LerncoachingComponent } from './lerncoaching.component';

describe('LerncoachingComponent', () => {
  let component: LerncoachingComponent;
  let fixture: ComponentFixture<LerncoachingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LerncoachingComponent]
    });
    fixture = TestBed.createComponent(LerncoachingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
