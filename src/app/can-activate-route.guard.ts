import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './services/authentication.service';
import { RouterService } from './services/router.service';

@Injectable({
  providedIn: 'root'
})
export class CanActivateRouteGuard implements CanActivate {

  bearerToken: string;

  constructor(private authenticationService: AuthenticationService, private routerService: RouterService) {
    this.bearerToken = authenticationService.getBearerToken();
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise<boolean>((resolve, reject) => {
      const resp = this.authenticationService.isUserAuthenticated();
      console.log(this.authenticationService.getBearerToken());
      if (!resp) {
        reject(false);
        this.routerService.routeToLogin();
      } else {
        resolve(true);
      }
    });


}
}
