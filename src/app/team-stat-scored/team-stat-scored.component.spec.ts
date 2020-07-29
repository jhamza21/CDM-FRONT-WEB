import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStatScoredComponent } from './team-stat-scored.component';

describe('TeamStatScoredComponent', () => {
  let component: TeamStatScoredComponent;
  let fixture: ComponentFixture<TeamStatScoredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamStatScoredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamStatScoredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
