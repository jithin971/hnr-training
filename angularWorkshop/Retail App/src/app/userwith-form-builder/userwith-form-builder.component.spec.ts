import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserwithFormBuilderComponent } from './userwith-form-builder.component';

describe('UserwithFormBuilderComponent', () => {
  let component: UserwithFormBuilderComponent;
  let fixture: ComponentFixture<UserwithFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserwithFormBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserwithFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
