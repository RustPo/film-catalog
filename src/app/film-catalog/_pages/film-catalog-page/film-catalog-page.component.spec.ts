import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCatalogPageComponent } from './film-catalog-page.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('FilmCatalogPageComponent', () => {
  let component: FilmCatalogPageComponent;
  let fixture: ComponentFixture<FilmCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCatalogPageComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
