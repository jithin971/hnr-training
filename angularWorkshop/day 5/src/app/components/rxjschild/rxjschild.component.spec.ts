import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjschildComponent } from './rxjschild.component';

describe('RxjschildComponent', () => {
  let component: RxjschildComponent;
  let fixture: ComponentFixture<RxjschildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjschildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
