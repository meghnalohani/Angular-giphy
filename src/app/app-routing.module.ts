import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavoritesComponent } from './favorites/favorites/favorites.component';
import { CanActivateRouteGuard } from './can-activate-route.guard';
import { SearchGiphsComponent } from './search-giphs/search-giphs.component';
import { TrendingGiphsComponent } from './trending-giphs/trending-giphs.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'search',
    component: SearchGiphsComponent
  },
  {
    path: 'trending',
    component: TrendingGiphsComponent
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: '',
    redirectTo: '/trending',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
