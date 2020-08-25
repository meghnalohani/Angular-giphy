import { Component, OnInit } from '@angular/core';
import { Giphy } from '../../models/giphy';
import { GiphsService } from '../../services/giphs.service';


@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  
  giphsArray: Array<Giphy>;
  favoriteGiph: Giphy;
  
  constructor(private giphyService: GiphsService) {
    this.giphsArray = [];
   }

  ngOnInit() {
    this.giphyService.getFavoriteGiphs();
    this.giphyService.favoriteSubject.subscribe(
      data => {
        console.log(data);
        this.giphsArray = data;
      },
      error => {
        console.log(error.message);
      }
    );
  }

}
