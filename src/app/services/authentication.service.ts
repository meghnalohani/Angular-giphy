import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginUser } from '../models/login-user';
import { HttpClientModule } from '@angular/common/http';
import { of, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public authUrl: string;
  user: LoginUser;
  users: LoginUser[] = [];

  constructor(private httpClient: HttpClient) {
    this.authUrl = 'http://localhost:3000/users';
    this.users = [
      {
        username: 'meghna',
        password: 'pass'
    },
    {
      username: 'harshit',
      password: 'pass1'
    }
    ];
  }

  getUsers() {
    // this.httpClient.get<Array<LoginUser>>(this.authUrl).subscribe(
    //   data => {
    //     console.log(data);
    //     this.users = data;
    //     console.log(this.users);
    //   }
    // );
  }
  authenticateUser(data) {
    let token;
    // this.httpClient.get<Array<LoginUser>>(this.authUrl).subscribe(
    //   userdata => {
    //     this.users = userdata;
    //     const foundUser = this.users.find(u => u.username === data.username
    //       && u.password === data.password);
    //     if (foundUser) {
    //       console.log('user found');
    //       token = Math.random().toString(36).substring(2, 15)
    //         + Math.random().toString(36).substring(2, 15);
    //     }
    //     console.log(token);
    //     return of(token);
    //   }
   // );
    const foundUser = this.users.find(u => u.username === data.username
      && u.password === data.password);
    if (foundUser) {
      console.log('user found');
      token = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
    }
    return token;
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
      return false; }
  } catch (error) {
    return false;
  }

  // return this.httpClient.post(this.authUrl + 'isAuthenticated', {}, {
  //   headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
  // }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();
}
}
