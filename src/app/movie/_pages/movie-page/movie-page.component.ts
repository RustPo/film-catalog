import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { BasicLayoutComponent } from '@shared/layouts/basic-layout/basic-layout.component';
import { MovieContentComponent } from '../../movie-content/movie-content.component';

@Component({
  selector: 'app-movie-page',
  imports: [BasicLayoutComponent, MovieContentComponent],
  templateUrl: './movie-page.component.html',
  styleUrl: './movie-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePageComponent {
  public readonly movieId = input.required<string>();
}
