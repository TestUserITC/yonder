import { ChangeDetectionStrategy, Component } from '@angular/core';

import { FAQ_ENTRIES } from '../../data/content.data';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FaqComponent {
  protected readonly entries = FAQ_ENTRIES;
}
