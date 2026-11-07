export interface ProcessStep {
  title: string;
  description: string;
}

export interface MovingService {
  code: string;
  title: string;
  description: string;
  handling: string;
}

export interface CoverageZone {
  zone: string;
  districts: string;
  leadTime: string;
  surcharge: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  route: string;
}

export interface FaqEntry {
  question: string;
  answer: string;
}

export const PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: 'Inventario',
    description: 'Nos cuentas qué tienes. Calculamos el volumen antes de mandar un solo camión.',
  },
  {
    title: 'Embalaje',
    description: 'Llegamos con cajas, film y mantas. Cada bulto queda rotulado por ambiente.',
  },
  {
    title: 'Ruta',
    description: 'Cargamos en orden inverso al de descarga. Lo último que sube es lo primero que baja.',
  },
  {
    title: 'Allá',
    description: 'Armamos, ubicamos y retiramos todo el cartón. Tú solo decides dónde va el sofá.',
  },
];

export const MOVING_SERVICES: readonly MovingService[] = [
  {
    code: 'YD-01',
    title: 'Hogar completo',
    description: 'De la primera caja a la última repisa, con embalaje y armado de muebles incluidos.',
    handling: 'Puerta a puerta',
  },
  {
    code: 'YD-02',
    title: 'Oficinas',
    description: 'Trasladamos de noche o en fin de semana para que el lunes todo siga funcionando.',
    handling: 'Sin detener tu operación',
  },
  {
    code: 'YD-03',
    title: 'Piezas delicadas',
    description: 'Pianos, obras de arte y antigüedades, en cajones hechos a medida.',
    handling: 'Manipular con cuidado',
  },
  {
    code: 'YD-04',
    title: 'Depósito temporal',
    description: 'Si la casa nueva aún no está lista, guardamos tus cosas en un almacén vigilado.',
    handling: 'Por semanas o meses',
  },
];

export const COVERAGE_ZONES: readonly CoverageZone[] = [
  {
    zone: 'A',
    districts: 'Miraflores, Barranco, San Isidro, Surco',
    leadTime: '24 horas',
    surcharge: 'Sin recargo',
  },
  {
    zone: 'B',
    districts: 'Jesús María, Lince, La Molina, San Borja',
    leadTime: '48 horas',
    surcharge: 'Sin recargo',
  },
  {
    zone: 'C',
    districts: 'Los Olivos, San Miguel, Chorrillos, Ate',
    leadTime: '48 horas',
    surcharge: '+ S/ 60',
  },
  {
    zone: 'D',
    districts: 'Ica, Trujillo, Arequipa',
    leadTime: '5 días',
    surcharge: 'Según ruta',
  },
];

export const TESTIMONIALS: readonly Testimonial[] = [
  {
    quote: 'Tercer piso, sin ascensor y con un piano. Nadie se quejó, ni siquiera yo.',
    author: 'Lucía R.',
    route: 'Barranco → Surco',
  },
  {
    quote: 'Abrí la caja que decía "cocina, lo urgente" y ahí estaba la cafetera.',
    author: 'Martín C.',
    route: 'Lince → La Molina',
  },
  {
    quote: 'Movieron cuarenta escritorios un sábado. El lunes nadie notó la diferencia.',
    author: 'Andrea V.',
    route: 'San Isidro → Miraflores',
  },
];

export const FAQ_ENTRIES: readonly FaqEntry[] = [
  {
    question: '¿Con cuánta anticipación debo reservar?',
    answer: 'Lo ideal es una semana. En las zonas A y B solemos tener espacio con 24 a 48 horas de aviso.',
  },
  {
    question: '¿Las cajas están incluidas?',
    answer: 'Sí, en el servicio de hogar completo. En los demás casos puedes comprarlas o usar las tuyas.',
  },
  {
    question: '¿Qué pasa si algo se daña?',
    answer: 'Cada mudanza incluye un seguro de carga. Revisamos el inventario contigo al llegar y registramos cualquier incidencia.',
  },
  {
    question: '¿La calculadora da un precio final?',
    answer: 'No, da una referencia. El precio final depende del acceso, los pisos y la distancia, y lo confirmamos en la cotización.',
  },
];
