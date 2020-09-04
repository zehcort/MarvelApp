import { Component, Input, OnInit } from '@angular/core';
import { Comic } from '../../models/comic';

@Component({
  selector: 'app-comic-card',
  templateUrl: './comic-card.component.html',
  styleUrls: ['./comic-card.component.scss'],
})
export class ComicCardComponent implements OnInit {

  @Input('comic') comic : Comic;

  constructor() {
     }

  ngOnInit() {
  }

  increaseLikes(comic: Comic){
    comic.likes = comic.likes + 1;
  }

  decreaseLikes(comic: Comic){
    comic.likes = comic.likes - 1;
  }


}
