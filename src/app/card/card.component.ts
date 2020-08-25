import { Component, OnInit, Input } from '@angular/core';
import { Giphy } from '../models/giphy';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { GiphsService } from '../services/giphs.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  giphCard: Giphy;
  constructor(private authenticationService: AuthenticationService, private routerService: RouterService,
    private giphsService: GiphsService) {}

  ngOnInit() {
  }
  addToFavorites() {
    if (this.authenticationService.isUserAuthenticated()) {
      console.log(this.authenticationService.getBearerToken());
      this.giphsService.addGiphToFavorite(this.giphCard);
      console.log('added to favorites');
    } else {
      this.routerService.routeToLogin();
    }
  }

}
