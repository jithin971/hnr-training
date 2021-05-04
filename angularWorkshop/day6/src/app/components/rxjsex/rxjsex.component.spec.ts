import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsexComponent } from './rxjsex.component';

describe('RxjsexComponent', () => {
  let component: RxjsexComponent;
  let fixture: ComponentFixture<RxjsexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsexComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
