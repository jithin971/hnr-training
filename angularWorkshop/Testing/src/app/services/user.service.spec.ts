import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('usersService should be created', () => { // Remove inject()
    expect(service).toBeTruthy();
    let obj={name:"jithin"}
    expect(service.getUser()).toEqual(obj)
  });
});
