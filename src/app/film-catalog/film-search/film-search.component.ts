import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ZardInputDirective } from '@shared/zard-ui/components/input/input.directive';

@Component({
  selector: 'app-film-search',
  imports: [ZardInputDirective],
  templateUrl: './film-search.component.html',
  styleUrl: './film-search.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilmSearchComponent {}
