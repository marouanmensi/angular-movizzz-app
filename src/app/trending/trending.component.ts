import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../movie-api.service';
import { IMovie } from '../models/imovie.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss']
})
export class trendingComponent implements OnInit {
  movies$: Observable<any>;

  constructor(private movieApiService: MovieApiService) {}

  ngOnInit(): void {
    this.gettrending();
  }

  gettrending(): any {
    this.movies$ = this.movieApiService.gettrendingMovies();
  }
}
