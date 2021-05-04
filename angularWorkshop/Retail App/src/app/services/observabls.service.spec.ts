import { TestBed } from '@angular/core/testing';

import { ObservablsService } from './observabls.service';

describe('ObservablsService', () => {
  let service: ObservablsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObservablsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
