import { ComponentFixture, TestBed } from '@angular/core/testing';

import { movieListComponent } from './film-list.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('movieListComponent', () => {
  let component: movieListComponent;
  let fixture: ComponentFixture<movieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [movieListComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(movieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
