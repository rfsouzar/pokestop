import Vue from 'vue'

import './styles/quasar.sass'
import lang from 'quasar/lang/pt-br.js'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import { Quasar } from 'quasar'

Vue.use(Quasar, {
  config: {},
  plugins: {
  },
  lang: lang
 })