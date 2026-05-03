import type { AppConfig } from './app-config';

export const config: AppConfig = {
  name: 'Lugantes',
  tagline: 'Lugares antes — historia LATAM en tu bolsillo',
  description: 'Reconstrucciones IA + relatos curados de plazas, iglesias y rincones históricos de ciudades intermedias LATAM.',
  longDescription: 'Lugantes es una guía cultural geo-localizada. Cada lugar tiene reconstrucción artística IA del pasado, foto del presente, narración en audio y mapa. Curaduría humana, no Wikipedia.',
  packageId: 'com.geosdata.lugantes',
  domain: 'lugantes.geosdata.com',

  primaryColor: '#d97706',
  accentColor: '#fbbf24',
  iconLetter: 'L',

  features: [
    { icon: '🏛️', title: 'Reconstrucciones IA', description: 'Visualiza cómo lucía cada plaza hace 100 o 200 años con reconstrucciones artísticas generadas por IA.' },
    { icon: '🎧', title: 'Narración en audio', description: 'Cada lugar tiene narración cultural en español. Escucha mientras caminas.' },
    { icon: '🗺️', title: 'Mapa interactivo', description: 'GPS + OpenStreetMap. Encuentra lugares cerca de ti o explora otra ciudad antes de viajar.' },
    { icon: '📖', title: 'Relatos curados', description: 'Textos breves redactados con cuidado. No Wikipedia genérica — historia hilada para curiosos, no académicos.' },
    { icon: '🌎', title: 'Ciudades intermedias LATAM', description: 'Foco en Montería, Sincelejo, Tunja, Popayán, Cuenca, Trujillo, etc. Las ciudades olvidadas por las guías.' },
    { icon: '📡', title: 'Funciona offline', description: 'Descarga ciudad y úsala sin datos. Ideal para viaje rural o zonas con cobertura intermitente.' },
  ],

  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.geosdata.lugantes',
  playStoreReady: false,

  contactEmail: 'contacto@geosdata.com',
  privacyEffectiveDate: 'Mayo 2026',
  thirdParties: ['Firebase (Auth + Crashlytics)', 'Google AdMob', 'Cloudflare R2 (imágenes y audios)', 'Minimax (síntesis de voz TTS)', 'OpenStreetMap (mapas)'],
  dataCollected: [
    'Identificador publicitario anónimo (Google AdMob)',
    'Reportes de errores anónimos (Firebase Crashlytics)',
    'Ubicación GPS (solo si activas "lugares cerca de mí", no se almacena)',
  ],
  publisher: 'GeosData',
  publisherUrl: 'https://geosdata.com',
};
