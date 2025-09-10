import {
  HttpBackend,
  HttpClient,
  HttpContextToken,
  HttpStatusCode,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { API_HEALTHCHECK } from '@shared/api/urls';

import {
  Observable,
  ReplaySubject,
  Subject,
  catchError,
  map,
  of,
  pairwise,
  repeat,
  tap,
} from 'rxjs';

export const IS_HEALTHCHECK = new HttpContextToken<boolean>(() => false);

const POOL_INTERVAL = 1000 * 5;

@Injectable({
  providedIn: 'root',
})
export class HealthCheckService {
  public onCancelRequests = new Subject<void>();

  public get isHealthy() {
    return this._isHealthy.asObservable();
  }

  private _isHealthy = new ReplaySubject<boolean[]>(1);
  private readonly _httpClient: HttpClient;

  constructor(
    private readonly _httpBackend: HttpBackend,
    private readonly _router: Router
  ) {
    this._httpClient = new HttpClient(this._httpBackend);
    this.startBackgroundHealthCheck();
  }

  public startBackgroundHealthCheck() {
    this._isHealthy.subscribe({
      next: (isHealthy) => {
        if (!isHealthy) {
          this.onCancelRequests.next();
        }
        if (!isHealthy[0] && !isHealthy[1] && navigator.onLine) {
          this._router.navigate(['technical-works']);
        } else if (
          isHealthy[0] &&
          isHealthy[1] &&
          this._router.url.includes('technical-works')
        ) {
          this._router.navigate(['/']);
        }
      },
      error: () => {
        console.log('polling error');
      },
      complete: () => {
        console.log('polling complete');
      },
    });

    this.healthCheck()
      .pipe(repeat({ delay: POOL_INTERVAL }), pairwise())
      .subscribe(this._isHealthy);
  }

  public healthCheck(): Observable<boolean> {
    return this._httpClient
      .get(API_HEALTHCHECK, { observe: 'response', responseType: 'text' })
      .pipe(
        map((response) => response.status === HttpStatusCode.Ok),
        catchError(() => of(false))
      );
  }
}
