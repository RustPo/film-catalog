import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesListComponent } from './movies-list.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('moviesListComponent', () => {
  let component: MoviesListComponent;
  let fixture: ComponentFixture<MoviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesListComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
