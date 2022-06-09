import { InjectionKey, ref } from 'vue'
import i18next from 'i18next'
// import moment from 'moment/min/moment-with-locales'
import { AvailableLocales, DEFAULT_LOCALE } from './AvailableLocales'

// TODO - define application type globaly and not just in @types

// TODO - define translate fn params properly
interface TransParams {
  [key: string]: number | string
}
export type TranslateFn = (key: string, args?: (string | number)[] | TransParams) => string
export const TranslateKey: InjectionKey<TranslateFn> = Symbol('translate')

export type MomentFn = (args: unknown) => unknown
export const MomentKey: InjectionKey<MomentFn> = Symbol('moment')

export const DEFAULT_LANGUAGE = AvailableLocales[DEFAULT_LOCALE]

interface Resources {
  [key: string]: {
    [key: string]: {
      [key: string]: string
    }
  }
}
const resources: Resources = {}
resources[DEFAULT_LANGUAGE] = { translation: {
  'global.ready': 'ready'
} }

// init i18n
i18next.init({
  lng: DEFAULT_LANGUAGE,
  debug: true,
  keySeparator: false,
  fallbackLng: DEFAULT_LANGUAGE,
  compatibilityJSON: 'v3',
  resources
}, function(err, t) {
  // initialized and ready to go!
  // todo: try to solve handling of expections better
  // eslint-disable-next-line no-console
  err ? console.log(err) : console.log('i18next:', t('global.ready'))
})

// // init moment
// let relativeMoment = false
// // set "new" languages for moment to recognize our naming
// moment.defineLocale('es-es', { parentLocale: 'es' })
// moment.defineLocale('pt-pt', { parentLocale: 'pt' })

// // set current locale
// moment.locale(DEFAULT_LANGUAGE)


const locale = ref<string>(DEFAULT_LOCALE)
const localeLoading = ref<number>(0)


export function UseLocalizations() {
  async function loadLanguage(newLocale: string) {
    try {
      localeLoading.value++
      const messages = await import(/* @vite-ignore */ `./jeraby/${AvailableLocales[newLocale]}/jeraby.ts`)

      await i18next.changeLanguage(AvailableLocales[newLocale])
      i18next.addResourceBundle(AvailableLocales[newLocale], 'translation', messages.default || messages, true, true)

      // moment.locale(newLocale)
      // if (relativeMoment) moment.updateLocale(AvailableLocales[newLocale], updateMomentRelativeTime(i18next.t))
      
      locale.value = newLocale

      // // GA change language
      // // TODO - remove this from template when using new localizations
      // window.dataLayer = window.dataLayer || []
      // window.dataLayer.push({
      //   'contentLocale': newLocale, // Language Locale of the page
      //   'pageName': newLocale + '|' + window.location.hostname // Language Locale of the page including Name
      // })

    } finally {
      localeLoading.value--
    }
    
  }

  async function changeLocale(newLocale: string) {

    try {
      loadLanguage(newLocale)
    } catch(e) {
      // eslint-disable-next-line no-console
      console.log('changeLanguage e>>> ', e)
      throw e
    }

  }
  
  // TODO - define en type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function initLocalizations(en: any) {

    locale.value = DEFAULT_LOCALE

    // set en resources
    i18next.addResourceBundle(DEFAULT_LANGUAGE, 'translation', en, true, true)
  
    const locPlugin = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      install(app: any) {
        // TODO - define args type
        app.provide(TranslateKey, (key: string, args?: (string | number)[] | TransParams): string => {
          // console.log('🚀 ~ file: localizations.ts ~ line 100 ~ app.provide ~ key', key)
          // console.log('🚀 ~ file: localizations.ts ~ line 100 ~ app.provide ~ branded key', `${key}.${brand.value}`)
          // console.log('🚀 ~ file: localizations.ts ~ line 100 ~ app.provide ~ key exists', i18next.exists(`${key}.${brand.value}`))
          // console.log('🚀 ~ file: localizations.ts ~ line 99 ~ app.provide ~ args', args)
          return (i18next.t(key, args) || `${key}`)
        })
  
        // app.provide(ChangeLocaleKey, async (newLocale: string): Promise<void> => {
        //   await loadLanguage(newLocale, application)
        // })

        // app.provide(MomentKey, moment)
      }
    }
  
    if (locale.value !== DEFAULT_LOCALE) {
      loadLanguage(locale.value)    
    }
  
    return locPlugin
  }

  const regionShow = (region: string[]) => {
    return region.findIndex(loc => loc === locale.value.split('-')[0]) > -1
  }

  return {
    locale,
    initLocalizations,
    localeLoading,
    changeLocale,
    regionShow
  }

}

