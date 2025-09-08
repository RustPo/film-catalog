import { ChangeDetectionStrategy, Component, input } from '@angular/core';
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
}
