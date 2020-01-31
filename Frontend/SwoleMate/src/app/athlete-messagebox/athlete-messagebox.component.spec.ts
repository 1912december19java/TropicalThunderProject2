import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AthleteMessageboxComponent } from './athlete-messagebox.component';

describe('AthleteMessageboxComponent', () => {
  let component: AthleteMessageboxComponent;
  let fixture: ComponentFixture<AthleteMessageboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AthleteMessageboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AthleteMessageboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
