import { ChangeDetectionStrategy, Component } from '@angular/core';

import { CalculatorComponent } from './sections/calculator/calculator.component';
import { CoverageComponent } from './sections/coverage/coverage.component';
import { FaqComponent } from './sections/faq/faq.component';
import { FooterComponent } from './sections/footer/footer.component';
import { HeaderComponent } from './sections/header/header.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ProcessComponent } from './sections/process/process.component';
import { QuoteComponent } from './sections/quote/quote.component';
import { ServicesComponent } from './sections/services/services.component';
import { TestimonialsComponent } from './sections/testimonials/testimonials.component';
import { TapeComponent } from './shared/tape/tape.component';

@Component({
  selector: 'app-root',
  imports: [
    CalculatorComponent,
    CoverageComponent,
    FaqComponent,
    FooterComponent,
    HeaderComponent,
    HeroComponent,
    ProcessComponent,
    QuoteComponent,
    ServicesComponent,
    TapeComponent,
    TestimonialsComponent,
  ],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {}
