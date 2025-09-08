import { ChangeDetectionStrategy, Component } from '@angular/core';
import { movieListComponent } from '../film-list/film-list.component';

@Component({
  selector: 'app-film-catalog-content',
  imports: [movieListComponent],
  templateUrl: './film-catalog-content.component.html',
  styleUrl: './film-catalog-content.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCatalogContentComponent {}
