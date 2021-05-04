import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuitinpipeComponent } from './buitinpipe.component';

describe('BuitinpipeComponent', () => {
  let component: BuitinpipeComponent;
  let fixture: ComponentFixture<BuitinpipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuitinpipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuitinpipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
