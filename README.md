# Yonder

Landing page for Yonder, a fictional moving company. It is a static single-page site with no backend: the quote form only validates its fields and sends nothing.

## Stack

- Angular 19 (standalone components, signals, reactive forms)
- TypeScript and SCSS
- Node.js 18.19+, 20.11+ or 22+

## Getting started

```bash
npm install
npm start
```

The site runs at `http://localhost:4200`. To create a production build in `dist/`:

```bash
npm run build
```

## Project structure

```
src/
  styles.scss        Design tokens and global styles
  app/
    data/            Page content and calculator inventory
    sections/        One component per page section
    services/        Load calculator logic
    shared/          Reusable tape component and scroll reveal directive
```

To change page copy, edit `data/content.data.ts`. To change calculator items or vehicles, edit `data/inventory.data.ts`.

## Load calculator

`LoadCalculatorService` holds the selected quantities in a signal and derives everything else from them:

- **Vehicle:** the smallest one that fits the total volume, or the largest if none does.
- **Trips:** the total volume divided by the vehicle's capacity, rounded up.
- **Fare:** the vehicle's base fare multiplied by the number of trips. It is a reference value, not a final price.

## Testing

There is no automated test suite yet.
