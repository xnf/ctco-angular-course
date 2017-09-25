import {Component} from '@angular/core';
import {RestService} from './rest-service.service';
import {IComic, IDisplayComic} from './icomic';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  comics: IDisplayComic[];
  newComic: any = {title: '', isSaving: false, description: {p: {img: {src: ''}}}};

  jumbotronConfig = {
    title: 'Comics',
    description: 'Hi! Welcome to the comics world!',
    buttonLabel: 'Show upload form',
    buttonClick: () => {
      this.jumbotronConfig.buttonLabel = 'Hide upload form';
      this.showNewComicForm = true
    }
  };

  showNewComicForm = false;

  constructor(private srv: RestService) {
    this.srv.get('comics').then((comics: IDisplayComic[]) => {
      comics.reverse();
      this.comics = comics;
      this.comics[0].show = true;
    });
  }

  showDescription(item: IDisplayComic) {
    item.show = !item.show;
  }

  addComic(comic: IDisplayComic) {
    comic.isSaving = true;
    this.srv.post<IDisplayComic>('comics', {
      description: {p: {img: {src: comic.description.p.img.src}}},
      title: comic.title
    }).then((newComicEntityFromBackend) => {
      // Simulating long server call
      setTimeout(() => {
        comic.isSaving = false;
        comic.show = false;
        this.comics.unshift(newComicEntityFromBackend)
      }, 1000);
    });
  }

  updateComic(comic: IDisplayComic) {
    comic.isSaving = true;
    this.srv.patch<IDisplayComic>('comics', {
      title: comic.title,
      id: comic.id
    }).then(() => {
      // Simulating long server call
      setTimeout(() => {
        comic.isSaving = false;
        comic.show = false;
      }, 1000);
    });
  }

}
