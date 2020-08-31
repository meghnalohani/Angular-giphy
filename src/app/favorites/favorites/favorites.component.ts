import { Component, OnInit } from '@angular/core';
import { Giphy } from '../../models/giphy';
import { GiphsService } from '../../services/giphs.service';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterService } from 'src/app/services/router.service';



@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  giphsArray: Array<Giphy>;
  favoriteGiph: Giphy;
  currentUser: string;

  constructor(private giphyService: GiphsService, private authenticationService: AuthenticationService,
    private routerService: RouterService) {
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
    this.currentUser = this.authenticationService.getUser();
  }
  goToTrending() {
    this.routerService.routeToTrending();
  }
}
