import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoodInputComponent } from './mood-input.component';

describe('MoodInputComponent', () => {
  let component: MoodInputComponent;
  let fixture: ComponentFixture<MoodInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoodInputComponent]
    });
    fixture = TestBed.createComponent(MoodInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
