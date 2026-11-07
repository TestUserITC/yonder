export interface InventoryItem {
  id: string;
  name: string;
  /** Volume the item takes up inside the vehicle, in cubic meters. */
  volume: number;
}

export interface Vehicle {
  name: string;
  /** Usable cargo capacity, in cubic meters. */
  capacity: number;
  /** Reference fare per trip, in Peruvian soles. */
  baseFare: number;
}

export const INVENTORY_ITEMS: readonly InventoryItem[] = [
  { id: 'sofa', name: 'Sofá de 3 plazas', volume: 2.2 },
  { id: 'bed', name: 'Cama de 2 plazas', volume: 1.8 },
  { id: 'fridge', name: 'Refrigeradora', volume: 1.2 },
  { id: 'dining', name: 'Comedor de 6 sillas', volume: 1.9 },
  { id: 'wardrobe', name: 'Ropero', volume: 1.6 },
  { id: 'desk', name: 'Escritorio', volume: 0.8 },
  { id: 'bike', name: 'Bicicleta', volume: 0.5 },
  { id: 'piano', name: 'Piano vertical', volume: 1.5 },
  { id: 'box', name: 'Caja mediana', volume: 0.1 },
];

/** Sorted from smallest to largest capacity. */
export const VEHICLES: readonly Vehicle[] = [
  { name: 'Furgón', capacity: 6, baseFare: 280 },
  { name: 'Camión mediano', capacity: 14, baseFare: 520 },
  { name: 'Camión grande', capacity: 28, baseFare: 890 },
];
