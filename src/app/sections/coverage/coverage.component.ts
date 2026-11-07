import { ChangeDetectionStrategy, Component } from '@angular/core';

import { COVERAGE_ZONES } from '../../data/content.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-coverage',
  imports: [RevealDirective],
  templateUrl: './coverage.component.html',
  styleUrl: './coverage.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CoverageComponent {
  protected readonly zones = COVERAGE_ZONES;
}
