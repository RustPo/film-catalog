import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from '@shared/components/header/header.component';

@Component({
  selector: 'app-basic-layout',
  imports: [HeaderComponent],
  templateUrl: './basic-layout.component.html',
  styleUrl: './basic-layout.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BasicLayoutComponent {}
