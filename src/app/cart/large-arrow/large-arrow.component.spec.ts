/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LargeArrowComponent } from './large-arrow.component';

describe('LargeArrowComponent', () => {
  let component: LargeArrowComponent;
  let fixture: ComponentFixture<LargeArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LargeArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LargeArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
