import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MoviesListComponent } from '../movie-list/movies-list.component';

@Component({
  selector: 'app-movies-content',
  imports: [MoviesListComponent],
  templateUrl: './movies-content.component.html',
  styleUrl: './movies-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesContentComponent {}
