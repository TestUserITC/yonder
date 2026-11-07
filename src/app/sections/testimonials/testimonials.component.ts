import { ChangeDetectionStrategy, Component } from '@angular/core';

import { TESTIMONIALS } from '../../data/content.data';
import { RevealDirective } from '../../shared/reveal.directive';

@Component({
  selector: 'app-testimonials',
  imports: [RevealDirective],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TestimonialsComponent {
  protected readonly testimonials = TESTIMONIALS;
}
