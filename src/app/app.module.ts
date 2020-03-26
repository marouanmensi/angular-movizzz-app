// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Components
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { SearchResultsComponent } from './search-results/search-results.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


import { MovieListItemComponent } from './movie-list-item/movie-list-item.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { trendingComponent } from './trending/trending.component';


// Services
import { MovieApiService } from './movie-api.service';

import { ActorDetailComponent } from './actor-detail/actor-detail.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { UpcomingMoviesComponent } from './upcoming-movies/upcoming-movies.component';
import { NewsComponent } from './news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    SearchResultsComponent,
    PageNotFoundComponent,
  
    MovieListItemComponent,
    MovieDetailComponent,
    trendingComponent,
  
    ActorDetailComponent,
    FavouritesComponent,
    UpcomingMoviesComponent,
    NewsComponent
  ],
  imports: [AppRoutingModule, BrowserModule, FormsModule, HttpClientModule],
  providers: [MovieApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
