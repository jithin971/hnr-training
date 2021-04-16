import { TestBed } from '@angular/core/testing';

import { AuthguardchildGuard } from './authguardchild.guard';

describe('AuthguardchildGuard', () => {
  let guard: AuthguardchildGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthguardchildGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
