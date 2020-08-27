import { Component, OnInit, Input } from '@angular/core';
import { Giphy } from '../../models/giphy';
import { AuthenticationService } from '../../services/authentication.service';
import { RouterService } from '../../services/router.service';
import { GiphsService } from '../../services/giphs.service';

@Component({
  selector: 'app-fav-card',
  templateUrl: './fav-card.component.html',
  styleUrls: ['./fav-card.component.css']
})
export class FavCardComponent implements OnInit {

  @Input()
  giphCard: Giphy;
  constructor(private authenticationService: AuthenticationService, private routerService: RouterService,
    private giphsService: GiphsService) {}

  ngOnInit() {
  }
  removeFromFavorites(id) {
    console.log('giph to be deleted',id);
    this.giphsService.removeGiphFromFavorite(id);
  }

}
