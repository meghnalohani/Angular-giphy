import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { LoginUser } from '../models/login-user';

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

  authenticateUser(data) {
    let token;
    const foundUser = this.users.find(u => u.username === data.username
      && u.password === data.password);
    if (foundUser) {
      localStorage.setItem('user', data.username);
      token = Math.random().toString(36).substring(2, 15)
        + Math.random().toString(36).substring(2, 15);
    }
    return token;
  }
  getUser() {
    return localStorage.getItem('user');
  }
  removeUser() {
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
      return false; }
  } catch (error) {
    return false;
  }

  // return this.httpClient.post(this.authUrl + 'isAuthenticated', {}, {
  //   headers: new HttpHeaders().set('Authorization', `Bearer ${token}`)
  // }).pipe(map(reponse => reponse['isAuthenticated'])).toPromise();
}
}
