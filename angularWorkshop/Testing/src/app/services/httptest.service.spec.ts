import { fakeAsync, TestBed, tick } from '@angular/core/testing';

import { HttptestService } from './httptest.service';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
describe('HttptestService', () => {
  let service: HttptestService;
  let httpTestingController: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttptestService]
    });
    service = TestBed.inject(HttptestService);
    httpTestingController = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    // After every test, assert that there are no more pending requests.
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(
    "search should return SearchItems",
    // Using Http is asynchronous so in order to test we need to use one of the asynchronous testing methods, we’ll use the fakeAsync method.
    fakeAsync(() => {
      let response = {
        resultCount: 1,
        results: [
          {
            artistId: 78500,
            artistName: "U2",
            trackName: "Beautiful Day",
            artworkUrl60: "image.jpg"
          }
        ]
      };

      // Perform a request (this is fakeAsync to the responce won't be called until tick() is called)
      service.search("U2");

      // Expect a call to this URL
      const req = httpTestingController.expectOne(
        "https://itunes.apple.com/search?term=U2&media=music&limit=20"
      );
      // Assert that the request is a GET.
      expect(req.request.method).toEqual("GET");
      // Respond with this data when called
      req.flush(response);

      // Call tick whic actually processes te response
      tick();

      // Run our tests
      expect(service.results.length).toBe(1);
      expect(service.results[0].artist).toBe("U2");
      expect(service.results[0].name).toBe("Beautiful Day");
      expect(service.results[0].thumbnail).toBe("image.jpg");
      // expect(service.results[0].artistId).toBe(78500);
    })
  );
});
