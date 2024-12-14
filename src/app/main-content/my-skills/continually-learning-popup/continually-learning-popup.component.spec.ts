import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuallyLearningPopupComponent } from './continually-learning-popup.component';

describe('ContinuallyLearningPopupComponent', () => {
  let component: ContinuallyLearningPopupComponent;
  let fixture: ComponentFixture<ContinuallyLearningPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContinuallyLearningPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContinuallyLearningPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
