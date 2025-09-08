import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MovieService } from '@shared/services/movie/movie.service';
import { ZardInputDirective } from '@shared/zard-ui/components/input/input.directive';

@Component({
  selector: 'app-movie-search',
  imports: [ZardInputDirective],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent {
  private movieService = inject(MovieService);

  onInput(value: string): void {
    this.movieService.setTitleForSerach(value);
  }
}
