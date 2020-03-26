import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEditComponent } from './edit.component';

describe('EditComponent', () => {
  let component: GridEditComponent;
  let fixture: ComponentFixture<GridEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GridEditComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GridEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
