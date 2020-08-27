import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavoritesComponent } from './favorites/favorites.component';
import { FavCardComponent } from './fav-card/fav-card.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [FavoritesComponent, FavCardComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule
  ]
})
export class FavoritesModule { }
