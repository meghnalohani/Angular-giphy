import { Giphy } from '../models/giphy';
import { GiphsService } from '../services/giphs.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trending-giphs',
  templateUrl: './trending-giphs.component.html',
  styleUrls: ['./trending-giphs.component.css']
})
export class TrendingGiphsComponent implements OnInit {

  giph: Giphy;
  giphsArray: Array<Giphy>;
  constructor(private giphyService: GiphsService) {
    this.giphsArray = [];
  }

  ngOnInit() {
    this.giphyService.getTrendingGiphs().subscribe(
      data => {
        this.giphsArray = data;
        console.log(this.giphsArray);
      },
      error => {
        console.log(error.message);
      }
    );
  }

}
