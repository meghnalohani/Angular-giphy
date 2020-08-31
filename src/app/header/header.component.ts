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

  currentUser: string;
  
  constructor(private giphsService: GiphsService,
    private authenticationService: AuthenticationService, private routerService: RouterService) {
      // this.actionSubject = new BehaviorSubject(this.action);
      
  }

  ngOnInit() {
    // if (this.authenticationService.isUserAuthenticated()) {
    //   this.currentUser = localStorage.getItem('user');
    // } else {
    //   this.currentUser = 'New User';
    // }
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
    // this.authenticationService.headerSubject.next('New user');
    this.authenticationService.removeUser();
    this.routerService.routeToLogin();
  }
  registerUser() {
    this.routerService.routeToRegister();
  }

}
