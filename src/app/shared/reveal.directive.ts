import { Directive, ElementRef, OnDestroy, OnInit, inject } from '@angular/core';

/** Adds the `is-visible` class the first time the host element enters the viewport. */
@Directive({
  selector: '[appReveal]',
  host: { class: 'reveal' },
})
export class RevealDirective implements OnInit, OnDestroy {
  private readonly element = inject<ElementRef<HTMLElement>>(ElementRef);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.element.nativeElement.classList.add('is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    this.observer.observe(this.element.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
