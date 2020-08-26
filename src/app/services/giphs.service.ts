import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Giphy } from '../models/giphy';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthenticationService } from './authentication.service';


@Injectable({
  providedIn: 'root'
})
export class GiphsService {

  trendingUrl: string;
  searchUrl: string;
  favoriteUrl: string;
  favoriteUserUrl: string;
  apiKey: string;
  resource: string;
  endpoint: string;
  apiUrl: string;
  limit: number;
  rating: string;
  currentUser: string;
  giph: Giphy;
  giphArray: Array<Giphy>;
  searchArray: Array<Giphy>;
  favoriteArray: Array<Giphy>;
  trendingSubject: BehaviorSubject<Array<Giphy>>;
  public searchSubject: BehaviorSubject<Array<Giphy>>;
  public favoriteSubject: BehaviorSubject<Array<Giphy>>;


  constructor(private httpClient: HttpClient, private authenticationservice: AuthenticationService) {
    this.apiUrl = 'https://api.giphy.com/v1';
    // this.giph = new Giphy();
    this.giphArray = [];
    this.searchArray = [];
    this.favoriteArray = [];
    this.apiKey = environment.api_key;
    this.searchSubject = new BehaviorSubject(this.searchArray);
    this.trendingSubject = new BehaviorSubject(this.giphArray);
    this.favoriteSubject = new BehaviorSubject(this.favoriteArray);
    this.trendingUrl = 'https://api.giphy.com/v1/gifs/trending?api_key=' + this.apiKey + '&limit=25&rating=g';
    this.searchUrl = 'https://api.giphy.com/v1/gifs/search?api_key=SybjqnSqP6yUH7CjIe2nUAZgtObkUfxJ&limit=25&offset=0&rating=g&lang=en';
    this.favoriteUrl = 'http://localhost:3000';
    this.favoriteUserUrl = '';
  }

  getTrendingGiphs() {
    this.endpoint = '/trending';
    this.limit = 5;
    this.rating = 'g';
    return this.httpClient.get(this.trendingUrl)
      .pipe(map(response => response['data']));

  }

  getSearchedGiphs(searchItem: string) {
    this.searchArray = [];
    this.searchSubject = new BehaviorSubject(this.searchArray);
    console.log('inside service ', searchItem);
    this.searchUrl = this.searchUrl + '&q=' + searchItem;
    this.httpClient.get(this.searchUrl)
      .pipe(map(response => response['data']))
      .subscribe(
        data => {
          this.searchArray = data;
          this.searchSubject.next(this.searchArray);
          console.log('Subject value', this.searchSubject);
        }
      );
    console.log('inside search subject');
  }

  addGiphToFavorite(favoriteGiph) {
    console.log(favoriteGiph);
    this.currentUser = localStorage.getItem('user');
    this.favoriteUserUrl = this.favoriteUrl + '/' + this.currentUser;
    this.httpClient.post(this.favoriteUserUrl, favoriteGiph).subscribe(
      data => {
        this.favoriteArray.push(favoriteGiph);
        this.favoriteSubject.next(this.favoriteArray);
        console.log(this.favoriteArray);
      },
      error => {
        console.log('Duplicate favorites not allowed');
      }
    );
    // this.getFavoriteGiphs();

  }

  getFavoriteGiphs() {
    this.currentUser = localStorage.getItem('user');
    this.favoriteUserUrl = this.favoriteUrl + '/' + this.currentUser;
    this.httpClient.get<Array<Giphy>>(this.favoriteUserUrl)
      .subscribe(
        data => {
          this.favoriteArray = data;
          this.favoriteSubject.next(this.favoriteArray);
        }
      );
    console.log('inside favorite subject');
  }
}
