import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRefereeComponent } from './update-referee.component';

describe('UpdateRefereeComponent', () => {
  let component: UpdateRefereeComponent;
  let fixture: ComponentFixture<UpdateRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateRefereeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
