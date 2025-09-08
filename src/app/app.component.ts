import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HealthCheckService } from '@shared/services/health-check/health-check.service';
import { ThemeService } from '@shared/services/theme/theme-service';
import { NgxSonnerToaster } from 'ngx-sonner';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgxSonnerToaster],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly healthCheckService = inject(HealthCheckService);

  ngOnInit(): void {
    this.themeService.initTheme();
  }
}
