import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from '@shared/layouts/basic-layout/basic-layout.component';
import { FilmCatalogContentComponent } from '../../film-catalog-content/film-catalog-content.component';

@Component({
  selector: 'app-film-catalog-page',
  imports: [BasicLayoutComponent, FilmCatalogContentComponent],
  templateUrl: './film-catalog-page.component.html',
  styleUrl: './film-catalog-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmCatalogPageComponent {}
