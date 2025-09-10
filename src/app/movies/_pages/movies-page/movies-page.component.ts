import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BasicLayoutComponent } from '@shared/layouts/basic-layout/basic-layout.component';
import { MoviesContentComponent } from '../../movies-content/movies-content.component';

@Component({
  selector: 'app-movies-page',
  imports: [BasicLayoutComponent, MoviesContentComponent],
  templateUrl: './movies-page.component.html',
  styleUrl: './movies-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviesPageComponent {}
