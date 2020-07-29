import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListEliminationComponent } from './match-list-elimination.component';

describe('MatchListEliminationComponent', () => {
  let component: MatchListEliminationComponent;
  let fixture: ComponentFixture<MatchListEliminationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListEliminationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListEliminationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
