import { TestBed } from '@angular/core/testing';

import { MovieApiService } from './movie-api.service';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('MovieApiService', () => {
  let service: MovieApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [basicTestingProviders],
    });
    service = TestBed.inject(MovieApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
