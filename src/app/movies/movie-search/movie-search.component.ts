import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardInputDirective } from '@shared/zard-ui/components/input/input.directive';

@Component({
  selector: 'app-movie-search',
  imports: [ZardInputDirective],
  templateUrl: './movie-search.component.html',
  styleUrl: './movie-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MovieSearchComponent {}
