import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject,
  input,
} from '@angular/core';
import { TMovie } from '@shared/api/movie/types/movie-api.types';
import { MovieService } from '@shared/services/movie/movie.service';
import { ZardLoaderComponent } from '@shared/zard-ui/components/loader/loader.component';

@Component({
  selector: 'app-movie',
  imports: [ZardLoaderComponent],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieComponent {
  public readonly movieId = input.required<string>();

  private movieService = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);
  public movie: TMovie | null = null;

  ngOnInit(): void {
    this.loadMovie();
  }

  public loadMovie(): void {
    if (!this.movieId()) return;

    this.movieService.getMovieById(this.movieId()).subscribe({
      next: (movie) => {
        this.movie = movie;
        this.cdr.markForCheck();
      },
    });
  }
}
