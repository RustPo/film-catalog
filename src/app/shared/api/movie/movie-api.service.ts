import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { TMovie } from '@shared/api/movie/types/movie-api.types';
import { API_MOVIES_GET } from '@shared/api/urls';

@Injectable({
  providedIn: 'root',
})
export class MovieApiService {
  private readonly http = inject(HttpClient);

  public getMoviesList(page: number, perPage: number): Observable<TMovie[]> {
    return this.http.get<TMovie[]>(
      `${API_MOVIES_GET}?_page=${page}&_per_page=${perPage}`
    );
  }

  public searchMovieByTitle(title: string): Observable<TMovie[]> {
    return this.http.get<TMovie[]>(`${API_MOVIES_GET}?title=${title}`);
  }
}
