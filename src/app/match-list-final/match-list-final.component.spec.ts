import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListFinalComponent } from './match-list-final.component';

describe('MatchListFinalComponent', () => {
  let component: MatchListFinalComponent;
  let fixture: ComponentFixture<MatchListFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
