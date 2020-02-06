import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachWorkoutProgramComponent } from './coach-workout-program.component';

describe('CoachWorkoutProgramComponent', () => {
  let component: CoachWorkoutProgramComponent;
  let fixture: ComponentFixture<CoachWorkoutProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachWorkoutProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachWorkoutProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
