import { Injectable } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private router: Router, private location: Location) { }

  routeToLogin() {
    this.router.navigate(['login']);
    }

  routeToDashboard() {
    this.router.navigate(['dashboard']);
  }
  routeToFavorites() {
    this.router.navigate(['favorites']);
  }
  routeToSearch() {
    this.router.navigate(['search']);
  }
  routeToTrending() {
    this.router.navigate(['trending']);
  }
  routeBack() {
    this.location.back();
  }
}
