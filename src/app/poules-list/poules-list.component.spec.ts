import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoulesListComponent } from './poules-list.component';

describe('PoulesListComponent', () => {
  let component: PoulesListComponent;
  let fixture: ComponentFixture<PoulesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoulesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoulesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
