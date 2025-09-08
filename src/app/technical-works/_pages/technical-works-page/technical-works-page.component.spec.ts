import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalWorksPageComponent } from './technical-works-page.component';

describe('TechnicalWorksPageComponent', () => {
  let component: TechnicalWorksPageComponent;
  let fixture: ComponentFixture<TechnicalWorksPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalWorksPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TechnicalWorksPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
