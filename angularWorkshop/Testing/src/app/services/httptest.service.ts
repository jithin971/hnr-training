import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})

export class HttptestService {

  apiRoot: string = "https://itunes.apple.com/search";
  results: SearchItem[];

  constructor(private http: HttpClient) {
    this.results = [];
  }

  search(term: string) {
    return new Promise((resolve, reject) => {
      this.results = [];
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
        .get(apiURL)
        .toPromise()
        .then(
          (res:any) => {
            // Success
            this.results = res.results.map(item => {
              console.log(item);
              return new SearchItem(
                item.trackName,
                item.artistName,
                item.artworkUrl60,
                item.artistId
              );
            });
            resolve(this.results);
          },
          msg => {
            // Error
            reject(msg);
          }
        );
    });
  }
}
class SearchItem {
  constructor(
    public name: string,
    public artist: string,
    public thumbnail: string,
    public artistId: string
  ) { }
}