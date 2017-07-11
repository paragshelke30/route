import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';


@Injectable()
export class WikipediaService {

  constructor(private jsonp: Jsonp, private http: Http) {
    console.log('Wikipedia Service call');
  }

  getWiki(): void {
    console.log('getWIKI');
  }

  search(term: string) {

    let wikiUrl = 'http://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'jsonp');
    params.set('callback', 'JSONP_CALLBACK');

    // TODO: Add error handling
    return this.jsonp
      .get(wikiUrl, { search: params })
      .map(response => <string[]>response.json()[1]);
  }

  getUsers() {
    let wikiUrl = '/api';

    return this.http.get(wikiUrl)
      .map((res: Response) => res.json());
  }

}
