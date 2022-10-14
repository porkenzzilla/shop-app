import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFeatureTwoComponent } from './new-feature-two.component';

describe('NewFeatureTwoComponent', () => {
  let component: NewFeatureTwoComponent;
  let fixture: ComponentFixture<NewFeatureTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFeatureTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewFeatureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
