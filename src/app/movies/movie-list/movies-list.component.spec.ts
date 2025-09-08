import { ComponentFixture, TestBed } from '@angular/core/testing';

import { moviesListComponent } from './movies-list.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('moviesListComponent', () => {
  let component: moviesListComponent;
  let fixture: ComponentFixture<moviesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [moviesListComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(moviesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
