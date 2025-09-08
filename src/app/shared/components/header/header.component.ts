import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/theme/theme-service';
import { SvgIconComponent } from 'angular-svg-icon';
import { MovieSearchComponent } from 'src/app/movies/movie-search/movie-search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [SvgIconComponent, MovieSearchComponent],
})
export class HeaderComponent {
  private readonly themeService = inject(ThemeService);

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  protected get getCurrentTheme(): 'light' | 'dark' {
    return this.themeService.getCurrentTheme();
  }
}
