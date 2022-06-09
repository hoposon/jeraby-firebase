import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import en from './localizations/jeraby/en/jeraby'
import { UseLocalizations } from './localizations/localizations'

try {
  const { initLocalizations } = UseLocalizations()
  
  const app = createApp(App)
  app.use(router)
  app.use(initLocalizations(en))
  app.mount('#jeraby')
} catch (e) {
  // TODO
  // do nothing
}
