import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-diagnostics-info-page',
  templateUrl: './diagnostics-info-page.component.html',
  styleUrls: ['./diagnostics-info-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class AppDiagnosticsInfoPage {
  @Input() public ping: string | null = '';
}
