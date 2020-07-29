import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRefereeComponent } from './create-referee.component';

describe('CreateRefereeComponent', () => {
  let component: CreateRefereeComponent;
  let fixture: ComponentFixture<CreateRefereeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateRefereeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateRefereeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
