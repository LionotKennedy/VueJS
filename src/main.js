import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'

// import Vue from 'vue'
// import ScrollAnimation from './directives/scrollanimation'

// Vue.directive('scrollanimation', ScrollAnimation);

loadFonts()

createApp(App)
  .use(vuetify)
  .mount('#app')
