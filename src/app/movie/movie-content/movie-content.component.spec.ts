import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieContentComponent } from './movie-content.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

describe('MovieContentComponent', () => {
  let component: MovieContentComponent;
  let fixture: ComponentFixture<MovieContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieContentComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieContentComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('movieId', '1');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
