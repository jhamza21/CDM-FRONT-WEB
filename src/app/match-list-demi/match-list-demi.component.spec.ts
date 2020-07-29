import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchListDemiComponent } from './match-list-demi.component';

describe('MatchListDemiComponent', () => {
  let component: MatchListDemiComponent;
  let fixture: ComponentFixture<MatchListDemiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchListDemiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchListDemiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
