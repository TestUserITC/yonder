import { Injectable, computed, signal } from '@angular/core';

import { INVENTORY_ITEMS, VEHICLES, Vehicle } from '../data/inventory.data';

@Injectable({ providedIn: 'root' })
export class LoadCalculatorService {
  private readonly quantities = signal<Readonly<Record<string, number>>>({});

  readonly totalVolume = computed(() =>
    INVENTORY_ITEMS.reduce((total, item) => total + item.volume * this.quantityOf(item.id), 0),
  );

  readonly totalItems = computed(() =>
    Object.values(this.quantities()).reduce((total, quantity) => total + quantity, 0),
  );

  /** The smallest vehicle that fits the load, or the largest one if none does. */
  readonly vehicle = computed<Vehicle>(() => {
    const volume = this.totalVolume();
    return VEHICLES.find((vehicle) => vehicle.capacity >= volume) ?? VEHICLES[VEHICLES.length - 1];
  });

  readonly trips = computed(() =>
    Math.max(1, Math.ceil(this.totalVolume() / this.vehicle().capacity)),
  );

  /** How full the cargo area looks, from 0 to 1. */
  readonly fillRatio = computed(() => Math.min(1, this.totalVolume() / this.vehicle().capacity));

  readonly estimatedFare = computed(() =>
    this.totalItems() === 0 ? 0 : this.vehicle().baseFare * this.trips(),
  );

  quantityOf(itemId: string): number {
    return this.quantities()[itemId] ?? 0;
  }

  increment(itemId: string): void {
    this.setQuantity(itemId, this.quantityOf(itemId) + 1);
  }

  decrement(itemId: string): void {
    this.setQuantity(itemId, Math.max(0, this.quantityOf(itemId) - 1));
  }

  reset(): void {
    this.quantities.set({});
  }

  private setQuantity(itemId: string, quantity: number): void {
    this.quantities.update((current) => ({ ...current, [itemId]: quantity }));
  }
}
