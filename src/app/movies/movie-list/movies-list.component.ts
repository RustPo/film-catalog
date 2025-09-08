import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MoviePreviewCardComponent } from '@shared/components/movie-preview-card/movie-preview-card.component';
import { MovieService } from '@shared/services/movie/movie.service';
import { ZardLoaderComponent } from '@shared/zard-ui/components/loader/loader.component';

@Component({
  selector: 'app-movie-list',
  imports: [ZardLoaderComponent, MoviePreviewCardComponent],
  templateUrl: './movies-list.component.html',
  styleUrl: './movies-list.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(window:scroll)': 'onWindowScroll()',
  },
})
export class moviesListComponent implements OnInit {
  @ViewChild('anchor', { static: true }) anchor!: ElementRef<HTMLElement>;

  private destroyRef = inject(DestroyRef);

  protected movieService = inject(MovieService);
  private page = 1;
  private perPage = 12;

  ngOnInit(): void {
    this.movieService.getMoviesList(this.page, this.perPage);
  }

  onWindowScroll() {
    if (this.movieService.isLoading()) return;
    const bottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (bottom) {
      this.loadMore();
    }
  }

  private loadMore(): void {
    this.page++;
    this.movieService.getMoviesList(this.page, this.perPage);
  }
}
