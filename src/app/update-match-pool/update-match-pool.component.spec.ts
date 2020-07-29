import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateMatchPoolComponent } from './update-match-pool.component';

describe('UpdateMatchPoolComponent', () => {
  let component: UpdateMatchPoolComponent;
  let fixture: ComponentFixture<UpdateMatchPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateMatchPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateMatchPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
