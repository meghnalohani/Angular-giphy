import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { BehaviorSubject } from 'rxjs';
import { Giphy } from '../models/giphy';
import {RouterService} from './router.service';
import {MatDialog} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authUrl: string;
  public favUrl: string;
  currentUser: string;
  newUserFavorites: Array<Giphy>;
  user: LoginUser;
  users: Array<LoginUser>;
  userSubject: BehaviorSubject<Array<LoginUser>>;
  public headerSubject: BehaviorSubject<string>;

  constructor(private httpClient: HttpClient, private routerService: RouterService, public dialog: MatDialog) {
    this.authUrl = 'http://localhost:3000/users/';
    this.favUrl = 'http://localhost:3000/';
    this.userSubject = new BehaviorSubject(this.users);
    this.users = [];
    this.newUserFavorites = [];
    this.headerSubject = new BehaviorSubject(this.currentUser);
    // this.users = [
    //   {
    //     username: 'meghna',
    //     password: 'pass'
    //   },
    //   {
    //     username: 'harshit',
    //     password: 'pass1'
    //   }
    // ];
  }

  async getUsers() {
    this.httpClient.get<Array<LoginUser>>(this.authUrl)
      .subscribe(data => {
        this.users = data;
        // console.log(this.users);
        this.userSubject.next(this.users);
        // console.log(this.userSubject);
      })
      ;
    return this.userSubject;
  }

  async authenticateUser(data) {
    await this.getUsers();
    let token;
    const foundUser = this.users.find(u => u.username === data.username
      && u.password === data.password);
    if (foundUser) {
      localStorage.setItem('user', data.username);
      token = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
      // this.headerSubject.next(data.username);
    }
    return token;
  }
  async registerUser(newUser) {
    // const newUsername = newUser.username;
    this.getUsers().then( data => {

    const foundUser = this.users.find(u => u.username === newUser.username);
    console.log(this.users);
    console.log(foundUser);
    if (foundUser) {
      alert('User already exists, select another username');
      //this.openDialog();
    } else {
      console.log('Need to register this user');
      this.httpClient.post(this.authUrl, newUser).subscribe(returnData => {
        console.log(returnData);
      });
      // this.httpClient.post(this.favUrl, {
      //   'body': `${newUsername}:[]`
      // });
      this.routerService.routeToLogin();
    }

  });
}

  getUser() {
    return localStorage.getItem('user');
  }
  removeUser() {
    console.log('user removed');
    localStorage.removeItem('user');
    localStorage.removeItem('bearerToken');
  }

  setBearerToken(token) {
    localStorage.setItem('bearerToken', token);

  }

  getBearerToken() {
    return localStorage.getItem('bearerToken');
  }

  isUserAuthenticated(): boolean {
    // console.log(this.getBearerToken().valueOf());
    try {
      if (this.getBearerToken()) {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }

  }
  openDialog() {
    this.dialog.open(DialogComponent);
  }
}
