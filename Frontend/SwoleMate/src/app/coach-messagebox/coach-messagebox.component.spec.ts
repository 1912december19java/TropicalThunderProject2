import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoachMessageboxComponent } from './coach-messagebox.component';

describe('CoachMessageboxComponent', () => {
  let component: CoachMessageboxComponent;
  let fixture: ComponentFixture<CoachMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoachMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoachMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
