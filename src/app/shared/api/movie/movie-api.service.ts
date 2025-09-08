import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { delay, map, Observable, timeout } from 'rxjs';

import {
  MovieSchema,
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
  private delay = 1500; // задержка чтобы запрос ждать подольше =)

  public getMoviesList(
    page: number,
    perPage: number,
    title: string
  ): Observable<TMoviesList> {
    return this.http
      .get<TMoviesList>(
        `${API_MOVIES_GET}?_page=${page}&_per_page=${perPage}&title=${title}`
      )
      .pipe(delay(this.delay), validateWith(MoviesListSchema));
  }

  public getMovieById(id: string): Observable<TMovie> {
    return this.http
      .get<TMovie>(`${API_MOVIES_GET}/${id}`)
      .pipe(delay(this.delay), validateWith(MovieSchema));
  }

  public searchMovieByTitle(title: string): Observable<TMoviesList> {
    return this.http
      .get<TMoviesList>(`${API_MOVIES_GET}?title=${title}`)
      .pipe(delay(this.delay), validateWith(MoviesListSchema));
  }
}
