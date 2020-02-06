import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { CoachWorkoutComponent } from "./coach-workout.component";

describe("CoachWorkoutComponent", () => {
  let component: CoachWorkoutComponent;
  let fixture: ComponentFixture<CoachWorkoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoachWorkoutComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
