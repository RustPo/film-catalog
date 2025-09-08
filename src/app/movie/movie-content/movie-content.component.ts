import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  selector: 'app-movie-content',
  imports: [MovieComponent],
  templateUrl: './movie-content.component.html',
  styleUrl: './movie-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieContentComponent {
  public readonly movieId = input.required<string>();
}
