import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

const REPEATS_PER_TRACK = 6;

/** A strip of packing tape that crosses the page with a looping printed message. */
@Component({
  selector: 'app-tape',
  templateUrl: './tape.component.html',
  styleUrl: './tape.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TapeComponent {
  readonly text = input.required<string>();

  protected readonly track = computed(() => Array<string>(REPEATS_PER_TRACK).fill(this.text()));
}
