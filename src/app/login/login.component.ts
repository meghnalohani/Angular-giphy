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
  errorMessage: string;
  constructor(private authenticationService: AuthenticationService, private routerService: RouterService) {
    this.loginUser = new LoginUser();
  }

  ngOnInit() {
  }
  registerUser() {
    this.routerService.routeToRegister();
  }
  loginSubmit() {

    this.loginUser.username = this.username;
    this.loginUser.password = this.password;
    // let token = this.authenticationService.authenticateUser(this.loginUser);
    let token;
    this.authenticationService.authenticateUser(this.loginUser).then( data => {
      token = data;
      console.log(token);
      if (token !== undefined) {
        this.authenticationService.setBearerToken(token);
        this.routerService.routeToFavorites();
        // this.authenticationService.headerSubject.next(this.authenticationService.getUser());
      } else {
        this.errorMessage = 'Invalid username or password';
        //route to register page
        // alert('Incorrect username or password');
        // this.routerService.routeToLogin();
      }
    },
    error => {
      console.log(error.message);
    });
    // console.log(this.loginUser);
    // console.log('Token:', token);
    // if (token !== undefined) {
    //   this.authenticationService.setBearerToken(token);
    //   this.routerService.routeToFavorites();
    // } else {
    //   //route to register page
    //   alert('Incorrect username or password');
    //   this.routerService.routeToLogin();
    // }

}
}
