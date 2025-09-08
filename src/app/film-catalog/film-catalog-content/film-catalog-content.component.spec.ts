import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCatalogContentComponent } from './film-catalog-content.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('FilmCatalogContentComponent', () => {
  let component: FilmCatalogContentComponent;
  let fixture: ComponentFixture<FilmCatalogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCatalogContentComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(FilmCatalogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
