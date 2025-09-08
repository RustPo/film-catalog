import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon } from 'angular-svg-icon';
import { HttpBackend, provideHttpClient } from '@angular/common/http';
import { EnvironmentProviders } from '@angular/core';

export const basicTestingProviders: EnvironmentProviders[] = [
  provideRouter([]),
  provideAngularSvgIcon(),
  provideHttpClient(),
];
