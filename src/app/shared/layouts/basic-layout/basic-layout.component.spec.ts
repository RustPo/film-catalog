import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicLayoutComponent } from './basic-layout.component';
import { basicTestingProviders } from '@shared/providers/basic-testing-provider';

describe('BasicLayoutComponent', () => {
  let component: BasicLayoutComponent;
  let fixture: ComponentFixture<BasicLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicLayoutComponent],
      providers: [basicTestingProviders],
    }).compileComponents();

    fixture = TestBed.createComponent(BasicLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
