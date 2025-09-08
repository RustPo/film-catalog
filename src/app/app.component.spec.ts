import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      imports: [AppComponent],
      providers: [basicTestingProviders],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
