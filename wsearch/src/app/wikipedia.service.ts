import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';

interface Car {
  year: number;
  color: string;
  running: boolean;
  make: {
    name: string;
    dateCreated: number;
  };
}

const observable = new Observable<Car>((observer) => {
  observer.next({
    year: 2020,
    color: 'red',
    running: true,
    make: { name: 'Ferrari', dateCreated: 2000 },
  });
}).pipe(pluck('make', 'name'));

observable.subscribe((value) => {
  console.log(value);
});

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  public search(term: string) {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*',
        },
      })
      .pipe(pluck('query', 'search'));
  }
}
