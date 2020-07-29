import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListQuartComponent } from './match-list-quart.component';

describe('MatchListQuartComponent', () => {
  let component: MatchListQuartComponent;
  let fixture: ComponentFixture<MatchListQuartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListQuartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListQuartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
