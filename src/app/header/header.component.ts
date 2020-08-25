import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { GiphsService } from '../services/giphs.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private giphsService: GiphsService,
    private authenticationService: AuthenticationService, private routerService: RouterService) {
  }

  ngOnInit() {
  }
  goToFavorites() {
    if (this.authenticationService.isUserAuthenticated()) {
      this.routerService.routeToFavorites();
    } else {
      this.routerService.routeToLogin();
    }
  }

}
