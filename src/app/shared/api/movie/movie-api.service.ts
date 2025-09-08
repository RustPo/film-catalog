import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

import {
  MoviesListSchema,
  TMovie,
  TMoviesList,
} from '@shared/api/movie/types/movie-api.types';
import { API_MOVIES_GET } from '@shared/api/urls';
import { validateWith } from '@shared/utils/zod/zod-rx';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private readonly http = inject(HttpClient);

  public getMoviesList(
    page: number,
    perPage: number,
    title: string
  ): Observable<TMoviesList> {
    return this.http
      .get<TMoviesList>(
        `${API_MOVIES_GET}?_page=${page}&_per_page=${perPage}&title=${title}`
      )
      .pipe(validateWith(MoviesListSchema));
  }

  public searchMovieByTitle(title: string): Observable<TMoviesList> {
    return this.http
      .get<TMoviesList>(`${API_MOVIES_GET}?title=${title}`)
      .pipe(validateWith(MoviesListSchema));
  }
}
