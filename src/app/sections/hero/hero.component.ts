import { ChangeDetectionStrategy, Component } from '@angular/core';

interface ManifestRow {
  label: string;
  value: string;
}

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  protected readonly manifest: readonly ManifestRow[] = [
    { label: 'Origen', value: 'Aquí' },
    { label: 'Destino', value: 'Allá' },
    { label: 'Contenido', value: 'Toda tu vida' },
    { label: 'Bultos', value: 'Los que hagan falta' },
    { label: 'Escaleras', value: 'También subimos' },
  ];
}
