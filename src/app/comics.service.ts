import {Injectable} from '@angular/core';
import {RestService} from './rest-service.service';
import {IDisplayComic} from './icomic';

@Injectable()
export class ComicsService {
  comics: IDisplayComic[] = [];

  constructor(private srv: RestService) {
    this.fetch();
  }

  fetch() {
    this.srv.get('comics').then((comics: IDisplayComic[]) => {
      comics.reverse();
      this.comics = comics;
      this.comics[0].show = true;
    });
  }
}
