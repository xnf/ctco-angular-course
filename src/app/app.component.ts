import {Component} from '@angular/core';
import {RestServiceService} from "./rest-service.service";
import {IComic, IDisplayComic} from "./icomic";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comics: IDisplayComic[];
  newComic: any = {};

  isSaving: boolean;

  constructor(private srv: RestServiceService) {
    this.srv.get('comics').then((comics: IDisplayComic[]) => {
      this.comics = comics;
      this.comics[0].show = true;
    });
  }

  showDescription(item: IDisplayComic) {
    item.show = !item.show;
  }

  addComic(){

  }

  updateComic(comic: IDisplayComic) {
    this.isSaving = true;
    this.srv.patch('comics', {
      title: comic.title,
      id: comic.id
    }).then(() => {

      setTimeout(()=>{
        this.isSaving = false;
        comic.show = false;
      }, 3000);

    });
  }

}
