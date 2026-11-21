import { DecimalPipe, PercentPipe } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject, signal, effect } from '@angular/core';

import { INVENTORY_ITEMS } from '../../data/inventory.data';
import { LoadCalculatorService } from '../../services/load-calculator.service';

interface CargoCell {
  x: number;
  y: number;
  filled: boolean;
}

const CARGO_COLUMNS = 12;
const CARGO_ROWS = 5;
const CELL_WIDTH = 34;
const CELL_HEIGHT = 32;
const CARGO_ORIGIN_X = 24;
const CARGO_ORIGIN_Y = 32;

@Component({
  selector: 'app-calculator',
  imports: [DecimalPipe, PercentPipe],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalculatorComponent {
  protected readonly calculator = inject(LoadCalculatorService);
  protected readonly items = INVENTORY_ITEMS;

  protected readonly hasNegativeInput = signal(false);
  protected readonly ratio = computed(() => this.calculator.fillRatio());
  protected readonly updateNegativeFlag = effect(() => {
    this.hasNegativeInput.set(this.ratio() < 0);
  });

  /** Cargo grid for the truck drawing, loaded from the cab toward the doors, bottom row first. */
  protected readonly cells = computed<CargoCell[]>(() => {
    const totalCells = CARGO_COLUMNS * CARGO_ROWS;
    const ratio = this.ratio();

    if (ratio < 0) {
      return [];
    }

    const filledCells = Math.ceil(ratio * totalCells);

    return Array.from({ length: totalCells }, (_, index) => {
      const column = Math.floor(index / CARGO_ROWS);
      const row = index % CARGO_ROWS;
      return {
        x: CARGO_ORIGIN_X + (CARGO_COLUMNS - 1 - column) * CELL_WIDTH,
        y: CARGO_ORIGIN_Y + (CARGO_ROWS - 1 - row) * CELL_HEIGHT,
        filled: index < filledCells,
      };
    });
  });

  protected readonly cellWidth = CELL_WIDTH - 3;
  protected readonly cellHeight = CELL_HEIGHT - 3;
}
