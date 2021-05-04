import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifecycleHelperComponent } from './lifecycle-helper.component';

describe('LifecycleHelperComponent', () => {
  let component: LifecycleHelperComponent;
  let fixture: ComponentFixture<LifecycleHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LifecycleHelperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LifecycleHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
