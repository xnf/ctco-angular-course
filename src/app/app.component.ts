import {Component, ViewChild} from '@angular/core';
import {RestService} from './rest-service.service';
import {IComic, IDisplayComic} from './icomic';
import {ComicsService} from './comics.service';
import {Modal} from 'ngx-modal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('newComicModal') newComicModal: Modal;

  comics: IDisplayComic[];
  newComic: any = {title: '', isSaving: false, description: {p: {img: {src: ''}}}};

  jumbotronConfig = {
    title: 'Comics',
    description: 'Hi! Welcome to the comics world!',
    buttonLabel: 'Show upload form',
    buttonClick: () => {
      this.showNewComicForm = !this.showNewComicForm;
      this.jumbotronConfig.buttonLabel = this.showNewComicForm ? 'Hide upload form' : 'Show upload form';
      window.localStorage.setItem('showNewComicForm', String(this.showNewComicForm));
    }
  };

  showNewComicForm = window.localStorage.getItem('showNewComicForm') === 'true';

  constructor(private restService: RestService, private comicsService: ComicsService) {

  }

  addComic(comic: IDisplayComic) {
    comic.isSaving = true;
    this.restService.post<IDisplayComic>('comics', {
      description: {p: {img: {src: comic.description.p.img.src}}},
      title: comic.title
    }).then((newComicEntityFromBackend) => {
      // Simulating long server call
      setTimeout(() => {
        comic.isSaving = false;
        comic.show = false;
        this.comicsService.comics.unshift(newComicEntityFromBackend)
      }, 1000);
    });
  }

  updateComic(comic: IDisplayComic) {
    comic.isSaving = true;
    this.restService.patch<IDisplayComic>('comics', {
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
