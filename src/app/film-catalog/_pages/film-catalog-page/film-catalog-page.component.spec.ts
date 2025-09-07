import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmCatalogPageComponent } from './film-catalog-page.component';

describe('FilmCatalogPageComponent', () => {
  let component: FilmCatalogPageComponent;
  let fixture: ComponentFixture<FilmCatalogPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmCatalogPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmCatalogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
