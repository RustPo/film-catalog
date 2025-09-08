import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('MovieService', () => {
  let service: MovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [basicTestingProviders],
    });
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
