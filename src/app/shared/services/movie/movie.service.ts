import { computed, inject, Injectable, signal } from '@angular/core';
import { MovieApiService } from '@shared/api/movie/movie-api.service';
import { TMovie, TMoviesList } from '@shared/api/movie/types/movie-api.types';
import { toast } from 'ngx-sonner';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private readonly movieApiService = inject(MovieApiService);

  private _moviesList = signal<TMovie[]>([]);
  private _moviesData = signal<TMoviesList | null>(null);
  private _isLoading = signal(true);
  private _error = signal<string | null>(null);
  private _titleForSerach = signal<string>('');

  public moviesList = computed(() => this._moviesList());
  public isLoading = computed(() => this._isLoading());
  public error = computed(() => this._error());
  public titleForSerach = computed(() => this._titleForSerach());

  public setTitleForSerach(title: string): void {
    this._titleForSerach.set(title);
  }

  public reset(): void {
    this._moviesList.set([]);
    this._moviesData.set(null);
    this._isLoading.set(true);
    this._error.set(null);
  }

  public getMovieById(id: string): Observable<TMovie> {
    return this.movieApiService.getMovieById(id);
  }

  public getMoviesList(page: number, perPage: number): void {
    if (this._moviesData() && !this._moviesData()?.next) {
      return;
    }

    this._isLoading.set(true);
    this._error.set(null);

    this.movieApiService
      .getMoviesList(page, perPage, this.titleForSerach())
      .subscribe({
        next: (moviesList) => {
          this._moviesData.set(moviesList);
          this._moviesList.set([...this.moviesList(), ...moviesList.data]);
          this._isLoading.set(false);
        },
        error: (error) => {
          toast('Ошибка при загрузке', {
            description: 'Пожалуйста, попробуйте позже',
          });

          this._error.set(error.message);
          this._isLoading.set(false);
        },
      });
  }
}
