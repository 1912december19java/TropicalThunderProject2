import { TestBed } from '@angular/core/testing';

import { UpdateWorkoutService } from './update-workout.service';

describe('UpdateWorkoutService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UpdateWorkoutService = TestBed.get(UpdateWorkoutService);
    expect(service).toBeTruthy();
  });
});
