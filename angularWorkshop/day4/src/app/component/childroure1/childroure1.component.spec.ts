import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Childroure1Component } from './childroure1.component';

describe('Childroure1Component', () => {
  let component: Childroure1Component;
  let fixture: ComponentFixture<Childroure1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Childroure1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Childroure1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
