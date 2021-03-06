import './main.postcss'
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'

// import routes generated by Voie
import routes from 'voie-pages'
// import icons data generated by PurgeIcons
import '@purge-icons/generated'

import App from './App.vue'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)

app.mount('#app')
