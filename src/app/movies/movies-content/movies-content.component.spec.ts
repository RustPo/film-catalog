import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesContentComponent } from './movies-content.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('MoviesContentComponent', () => {
  let component: MoviesContentComponent;
  let fixture: ComponentFixture<MoviesContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesContentComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(MoviesContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
