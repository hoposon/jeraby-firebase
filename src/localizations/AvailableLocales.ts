export enum AvailableLocales {
// 'ar-ww' = 'ar',      // arabic
// 'ar-sa' = 'ar',
// 'ar-ae' = 'ar',
'cs-cz' = 'cs',      // czech
// 'de-ch' = 'de',      // Deutschland
// 'de-de' = 'de',      // Schweiz (Deutsch)
'en-ww' = 'en',      // Worldwide (English)
// 'en-eu' = 'en',      // Europe (English)
// 'en-au' = 'en',      // Australia
// 'en-nz' = 'en',      // New Zealand
// 'en-il' = 'en',      // Israel (English)
// 'en-kr' = 'en',      // Korea (English)
// 'en-sg' = 'en',      // Singapore (English)
// 'en-za' = 'en',      // South Africa
// 'en-ca' = 'en',      // Canada (English)
// 'en-fi' = 'en',      // Finland (English)
// 'en-dk' = 'en',      // Denmark (English)
// 'en-no' = 'en',      // Norway (English)
// 'en-gb' = 'en',      // United Kingdom
// 'en-us' = 'en',      // USA (English)
// 'en-se' = 'en',      // Sweden (English)
// 'es-ww' = 'es',      // América Latina
// 'es-es' = 'es',      // España
// 'es-us' = 'es',      // EE.UU. (Español)
// 'es-ar' = 'es',      // Agentina
// 'es-mx' = 'es',      // México
// 'fr-fr' = 'fr',      // France
// 'fr-be' = 'fr',      // Belgique (Français)
// 'fr-ca' = 'fr',      // Canada (Français)
// 'fr-ch' = 'fr',      // Suisse  (Français)
// 'it-it' = 'it',      // Italia
// 'ja-jp' = 'ja',      // Japanese
// 'nb-no' = 'nb',      // Norway (Norwegian)
// 'nl-nl' = 'nl',      // Nederland
// 'nl-be' = 'nl',      // België (Nederlands)
// 'pl-pl' = 'pl',      // Polish (Polska)
// 'pt-br' = 'pt-BR',   // Brasil
// 'pt-pt' = 'pt-PT',   // Portugal
// 'ru-ru' = 'ru',      // russian
// 'tr-tr' = 'tr',      // Türkiye
// 'zh-cn' = 'zh-CN',   // Chinese
// 'zh-tw' = 'zh-TW',   // Taiwanese
}

export const DEFAULT_LOCALE = 'en-ww'

export const localizationsList = [
  {
    countries: [
      { code: 'en-us', key: 'USA (English)' },
      { code: 'en-ca', key: 'Canada (English)' },
      { code: 'fr-ca', key: 'Canada (Français)' },
      { code: 'es-ar', key: 'Argentina' },
      { code: 'es-mx', key: 'México' },
      { code: 'es-us', key: 'EE.UU. (Español)' },
      { code: 'pt-br', key: 'Brasil' }
    ],
    groupInfo: {
      groupName: 'footer.language.Americas',
      genLan: { code: 'es-ww', key: 'América Latina' }
    }
  },
  {
    countries: [
      { code: 'cs-cz', key: 'Česká republika' },
      { code: 'de-ch', key: 'Schweiz (Deutsch)' },
      { code: 'de-de', key: 'Deutschland' },
      { code: 'en-dk', key: 'Denmark (English)' },
      { code: 'en-fi', key: 'Finland (English)' },
      { code: 'en-gb', key: 'United Kingdom' },
      { code: 'en-no', key: 'Norway (English)' },
      { code: 'en-se', key: 'Sweden (English)' },
      { code: 'es-es', key: 'España' },
      { code: 'fr-be', key: 'Belgique (Français)' },
      { code: 'fr-ch', key: 'Suisse  (Français)' },
      { code: 'fr-fr', key: 'France' },
      { code: 'it-it', key: 'Italia ' },
      { code: 'nb-no', key: 'Norway (Norwegian)' },
      { code: 'nl-be', key: 'België (Nederlands)' },
      { code: 'nl-nl', key: 'Nederland' },
      { code: 'pl-pl', key: 'Polska' },
      { code: 'pt-pt', key: 'Portugal' },
      { code: 'ru-ru', key: 'Россия ' },
      { code: 'tr-tr', key: 'Türkiye' },
      { code: 'en-il', key: 'Israel (English)' },
      { code: 'ar-ae', key: 'الإمارات العربية المتحدة' },
      { code: 'ar-sa', key: 'المملكة العربية السعودية' },
      { code: 'ar-ww', key: 'الدول العربية' },
      { code: 'en-za', key: 'South Africa' }
    ],
    groupInfo: {
      groupName: 'footer.language.europeEastAfrica',
      genLan: { code: 'en-eu', key: 'Europe (English)' },
      wrap: 15
    }
  },
  {
    countries: [
      { code: 'en-au', key: 'Australia' },
      { code: 'en-nz', key: 'New Zealand' },
      { code: 'en-kr', key: 'Korea (English)' },
      { code: 'en-sg', key: 'Singapore (English)' },
      { code: 'ja-jp', key: '日本語 ' },
      { code: 'zh-cn', key: '中华人民共和国' },
      { code: 'zh-tw', key: '臺灣' }
    ],
    groupInfo: {
      groupName: 'footer.language.AsiaPacific',
      genLan: { code: 'en-ww', key: 'Worldwide (English)' }
    }
  }
]