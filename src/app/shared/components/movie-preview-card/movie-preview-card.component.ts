import {
  ChangeDetectionStrategy,
  Component,
  inject,
  input,
} from '@angular/core';
import { Router } from '@angular/router';
import { TMovie } from '@shared/api/movie/types/movie-api.types';
import { ZardCardComponent } from '@shared/zard-ui/components/card/card.component';

@Component({
  selector: 'app-movie-preview-card',
  imports: [ZardCardComponent],
  templateUrl: './movie-preview-card.component.html',
  styleUrl: './movie-preview-card.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MoviePreviewCardComponent {
  movie = input<TMovie>();

  private readonly router = inject(Router);

  protected naviagteToMoviePage(id?: string) {
    if (!id) return;
    this.router.navigate(['movie', id]);
  }
}
