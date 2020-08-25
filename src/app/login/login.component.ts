import { Component, OnInit } from '@angular/core';
import { LoginUser } from '../models/login-user';
import { AuthenticationService } from '../services/authentication.service';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser: LoginUser;
  username: string;
  password: string;
  submitMessage: string;
  constructor(private authenticationService: AuthenticationService, private routerService: RouterService) {
    this.loginUser = new LoginUser();
  }

  ngOnInit() {
  }
  loginSubmit() {

    this.loginUser.username = this.username;
    this.loginUser.password = this.password;
    let token = this.authenticationService.authenticateUser(this.loginUser);
    console.log(this.loginUser);
    console.log(token);
    if (token !== undefined) {
      this.authenticationService.setBearerToken(token);
      this.routerService.routeToFavorites();
    } else {
      //route to register page
      this.routerService.routeToLogin();
    }

}
}
