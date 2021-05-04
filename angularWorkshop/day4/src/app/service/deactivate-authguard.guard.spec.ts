import { TestBed } from '@angular/core/testing';

import { DeactivateAuthguardGuard } from './deactivate-authguard.guard';

describe('DeactivateAuthguardGuard', () => {
  let guard: DeactivateAuthguardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivateAuthguardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
