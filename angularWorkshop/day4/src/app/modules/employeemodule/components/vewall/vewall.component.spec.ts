import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VewallComponent } from './vewall.component';

describe('VewallComponent', () => {
  let component: VewallComponent;
  let fixture: ComponentFixture<VewallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VewallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VewallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
