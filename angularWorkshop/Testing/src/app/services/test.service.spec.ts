import { inject, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';

import { TestService } from './test.service';

describe('TestService', () => {
  let service: TestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
  it('Test should be created', inject([TestService], (service: TestService) => {

    expect(service).toBeTruthy();
    expect(service.add()).toEqual(0)
  }));

  it('should return a single user', () => {
    const userResponse = {
      id: '2',
      name: 'Bob',
      role: 'Developer',
      pokemon: 'Charizard'
    };
    let response;
    spyOn(service, 'findOne').and.returnValue(of(userResponse));

    service.findOne('2').subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  });
  
  it('should return a collection of users', () => {
    const userResponse = [
      {
        id: '1',
        name: 'Jane',
        role: 'Designer',
        pokemon: 'Blastoise'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      }
    ];
    let response;
    spyOn(service, 'all').and.returnValue(of(userResponse));

    service.all().subscribe(res => {
      response = res;
    });

    expect(response).toEqual(userResponse);
  });

  it("test", () => {
    const res = "sad"
    let response;
    spyOn(service, 'textTest').and.returnValue(of(res));
    service.textTest().subscribe(res => {
      response = res
    })
    expect(response).toEqual(res);
  })
});
