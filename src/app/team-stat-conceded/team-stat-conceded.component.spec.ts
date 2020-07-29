import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatConcededComponent } from './team-stat-conceded.component';

describe('TeamStatConcededComponent', () => {
  let component: TeamStatConcededComponent;
  let fixture: ComponentFixture<TeamStatConcededComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatConcededComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatConcededComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
