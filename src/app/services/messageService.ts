import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable(
  {
    providedIn: 'root'
  }
)

export class MessageService {
  // tslint:disable-next-line: variable-name
  constructor(private _http: HttpClient) {

  }
  postMessage(message: any) {
    return this._http.post('http://localhost:3000/api/message', message);
  }
}