import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, Headers, RequestOptions } from "@angular/http";

import 'rxjs/add/operator/map';
@Injectable()
export class UserService {

  constructor(private jsonp: Jsonp, private http: Http) { }
  login(user: object) {
    let url = 'http://172.25.16.194:3030/api/login';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this.http.post(url, body, options).map((res: Response) => res.json());
  }

  addUser(user: object, token: string) {
    let url = 'http://172.25.16.194:3030/api/user';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', 'Bearer ' + token);
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(user);
    return this.http.post(url, body, options).map((res: Response) => res.json());
  }

  updateContact(contact: object) {
    let url = 'http://localhost:8080/api/contact';
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(contact);
    return this.http.put(url, body, options)
      .map((res: Response) => res.json());
  }
}
