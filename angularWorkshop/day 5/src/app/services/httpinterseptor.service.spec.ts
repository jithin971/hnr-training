import { TestBed } from '@angular/core/testing';

import { HttpinterseptorService } from './httpinterseptor.service';

describe('HttpinterseptorService', () => {
  let service: HttpinterseptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpinterseptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
