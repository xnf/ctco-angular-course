import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.css']
})
export class JumbotronComponent implements OnInit {

  @Input('label') buttonLabelAttribute: string;
  @Input('title') titleAttribute: string;
  @Input('description') descriptionAttribute: string;
  @Output('clicked') clicked: EventEmitter<string>
    = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onClick() {
    this.clicked.emit('I was clicked');
  }

}
