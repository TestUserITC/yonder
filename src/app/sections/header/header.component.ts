import { ChangeDetectionStrategy, Component } from '@angular/core';

interface NavLink {
  label: string;
  href: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  protected readonly links: readonly NavLink[] = [
    { label: 'Proceso', href: '#proceso' },
    { label: 'Servicios', href: '#servicios' },
    { label: 'Calculadora', href: '#calculadora' },
    { label: 'Cobertura', href: '#cobertura' },
    { label: 'Preguntas', href: '#preguntas' },
  ];
}
