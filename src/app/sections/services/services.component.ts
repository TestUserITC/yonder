import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MOVING_SERVICES } from '../../data/content.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-services',
  imports: [RevealDirective],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ServicesComponent {
  protected readonly services = MOVING_SERVICES;
}
