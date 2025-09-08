import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { MovieContentComponent } from '../../movie-content/movie-content.component';

@Component({
  selector: 'app-movie-page',
  imports: [MovieContentComponent],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent {
  public movieId = input.required<string>();
}
