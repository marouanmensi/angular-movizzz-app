import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { trendingComponent } from './trending/trending.component';

import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NewsComponent } from './news/news.component';
const routes: Routes = [
  { path: '', redirectTo: 'movies/trending', pathMatch: 'full' },
  { path: 'movies/trending', component: trendingComponent },
  { path: 'movies/favourites', component: FavouritesComponent },
  { path: 'movies/upcoming-movies', component: UpcomingMoviesComponent},
  { path: 'movies/news', component: NewsComponent},
  {
    path: 'movies/:id',
    component: MovieDetailComponent
  },
  { path: 'actors/:id', component: ActorDetailComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
