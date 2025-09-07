import { Component, inject } from '@angular/core';
import { ThemeService } from '@shared/services/theme/theme-service';
import { SvgIconComponent } from 'angular-svg-icon';
import { FilmSearchComponent } from 'src/app/film-catalog/film-search/film-search.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [SvgIconComponent, FilmSearchComponent],
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
