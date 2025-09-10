import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnDestroy,
} from '@angular/core';
import { MovieService } from '@shared/services/movie/movie.service';
import { ZardInputDirective } from '@shared/zard-ui/components/input/input.directive';

@Component({
  selector: 'app-movie-search',
  imports: [ZardInputDirective],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent implements OnDestroy {
  private movieService = inject(MovieService);
  ngOnDestroy(): void {
    this.movieService.setTitleForSerach('');
  }

  onInput(value: string): void {
    this.movieService.setTitleForSerach(value);
  }
}
