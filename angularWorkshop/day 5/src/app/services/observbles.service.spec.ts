import { TestBed } from '@angular/core/testing';

import { ObservblesService } from './observbles.service';

describe('ObservblesService', () => {
  let service: ObservblesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservblesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
