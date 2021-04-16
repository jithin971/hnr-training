import { TestBed } from '@angular/core/testing';

import { DeactivatecompGuard } from './deactivatecomp.guard';

describe('DeactivatecompGuard', () => {
  let guard: DeactivatecompGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(DeactivatecompGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
