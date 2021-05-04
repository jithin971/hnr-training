import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TowayComponent } from './toway.component';

describe('TowayComponent', () => {
  let component: TowayComponent;
  let fixture: ComponentFixture<TowayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TowayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TowayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
