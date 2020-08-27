import { Component, OnInit } from '@angular/core';
import { GiphsService } from '../services/giphs.service';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // action: string;
  // actionSubject: BehaviorSubject<string>;
  constructor(private giphsService: GiphsService,
    private authenticationService: AuthenticationService, private routerService: RouterService) {
      // this.actionSubject = new BehaviorSubject(this.action);
      
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
  loginUser() {
    this.routerService.routeToLogin();
  }
  logoutUser() {
    this.authenticationService.removeUser();
    this.routerService.routeToLogin();
  }

}
