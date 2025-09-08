import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideAngularSvgIcon } from 'angular-svg-icon';

import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { HealthCheckService } from '@shared/services/health-check/health-check.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    provideAngularSvgIcon(),
    HealthCheckService,
  ],
};
