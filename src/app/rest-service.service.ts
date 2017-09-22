import {Injectable} from '@angular/core';
import {Http} from "@angular/http";
import "rxjs/add/operator/map";
import "rxjs/add/operator/toPromise";

const SERVER_ADDR = 'http://localhost:3000/';

@Injectable()
export class RestServiceService {

  constructor(private http: Http) {

  }

  // get('comics')
  get<T>(entity: string): Promise<T> {
    return this.http.get(SERVER_ADDR + entity)
      .map(res => res.json())
      .toPromise();
  }

  patch<T>(entity: string, data: any): Promise<T> {

    const patchUrl = SERVER_ADDR + entity + '/' + data.id;

    return this.http
      .patch(patchUrl, data)
      .map(res => res.json())
      .toPromise();
  }

}
