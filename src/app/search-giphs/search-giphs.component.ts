import { Component, OnInit } from '@angular/core';
import { GiphsService } from '../services/giphs.service';
import { Giphy } from '../models/giphy';

@Component({
  selector: 'app-search-giphs',
  templateUrl: './search-giphs.component.html',
  styleUrls: ['./search-giphs.component.css']
})
export class SearchGiphsComponent implements OnInit {

  giphsArray: Array<Giphy>;
  searchKey: string;

  constructor(private giphsService: GiphsService) {
    this.giphsArray = [];
  }

  ngOnInit() {
  }
  searchGiphy(searchValue) {
    console.log(searchValue);
    this.giphsService.getSearchedGiphs(searchValue);
    this.giphsService.searchSubject.subscribe(
      data => {
        console.log(data);
        this.giphsArray = data;
      },
      error => {
        console.log(error.message);
      }
    );
  } }