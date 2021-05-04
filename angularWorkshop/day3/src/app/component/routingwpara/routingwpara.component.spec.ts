import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingwparaComponent } from './routingwpara.component';

describe('RoutingwparaComponent', () => {
  let component: RoutingwparaComponent;
  let fixture: ComponentFixture<RoutingwparaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingwparaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoutingwparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
