import { TestBed } from '@angular/core/testing';

import { ChildAuthguardGuard } from './child-authguard.guard';

describe('ChildAuthguardGuard', () => {
  let guard: ChildAuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
