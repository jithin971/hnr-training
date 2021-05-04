import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Itemlist2Component } from './itemlist2.component';

describe('Itemlist2Component', () => {
  let component: Itemlist2Component;
  let fixture: ComponentFixture<Itemlist2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Itemlist2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Itemlist2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
