import { DecimalPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

import { PROCESS_STEPS } from '../../data/content.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-process',
  imports: [DecimalPipe, RevealDirective],
  templateUrl: './process.component.html',
  styleUrl: './process.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProcessComponent {
  protected readonly steps = PROCESS_STEPS;
}
