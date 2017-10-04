import {Component, OnInit} from '@angular/core';
import {RestService} from '../rest-service.service';
import {IDisplayComic} from '../icomic';
import {ComicsService} from '../comics.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css']
})
export class ComicsListComponent implements OnInit {

  getComics(){
    return this.srv.comics;
  }

  constructor(private srv: ComicsService) {

  }

  ngOnInit() {
  }


  showDescription(item: IDisplayComic) {
    item.show = !item.show;
  }
}
