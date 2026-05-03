// Single source of truth para landing. Editar solo este archivo al forkear template.

export interface Feature {
  icon: string;     // emoji o SVG inline
  title: string;
  description: string;
}

export interface AppConfig {
  // Identidad
  name: string;
  tagline: string;
  description: string;       // 1-2 frases, hero
  longDescription: string;   // 1 paragraph, "qué hace"
  packageId: string;         // com.geosdata.<name>
  domain: string;            // <name>.geosdata.com

  // Brand
  primaryColor: string;      // hex, ej "#10b981"
  accentColor: string;       // hex
  iconLetter: string;        // 1 char fallback si no hay logo
  logoSvg?: string;          // SVG inline opcional

  // Features
  features: Feature[];

  // CTAs
  playStoreUrl: string;      // https://play.google.com/store/apps/details?id=...
  playStoreReady: boolean;   // false = badge "Pronto", true = link real

  // Legal
  contactEmail: string;
  privacyEffectiveDate: string; // "Mayo 2026"
  thirdParties: string[];    // ["Firebase", "AdMob", "Cloudflare R2", "Minimax TTS"]
  dataCollected: string[];   // ["Device ID anónimo (AdMob)", "Crash reports"]
  publisher: string;         // "GeosData"
  publisherUrl: string;      // https://geosdata.com
}
