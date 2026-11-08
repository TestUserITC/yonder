import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators, ValidatorFn } from '@angular/forms';

const PERUVIAN_MOBILE_PATTERN = /^9\d{8}$/;

const pad2 = (n: number) => n.toString().padStart(2, '0');
function localDateYYYYMMDD(date: Date): string {
  return `${date.getFullYear()}-${pad2(date.getMonth() + 1)}-${pad2(date.getDate())}`;
}
function todayLocalDateStr(): string {
  return localDateYYYYMMDD(new Date());
}
const dateNotInPastValidator: ValidatorFn = (control) => {
  const value = (control.value ?? '').toString().trim();
  if (!value) {
    return null;
  }
  const today = todayLocalDateStr();
  return value < today ? { datePast: true } : null;
};

@Component({
  selector: 'app-quote',
  imports: [ReactiveFormsModule],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuoteComponent {
  private readonly formBuilder = inject(FormBuilder);

  protected readonly form = this.formBuilder.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(PERUVIAN_MOBILE_PATTERN)]],
    email: ['', [Validators.required, Validators.email]],
    origin: ['', Validators.required],
    destination: ['', Validators.required],
    moveDate: ['', [Validators.required, dateNotInPastValidator]],
    details: [''],
  });

  protected readonly todayStr = todayLocalDateStr();

  protected readonly submitted = signal(false);

  protected showsError(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitted.set(true);
  }

  protected startOver(): void {
    this.form.reset();
    this.submitted.set(false);
  }
}
