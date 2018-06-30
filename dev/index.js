import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import LineLoginButton from 'line-login-button-with-vuetify'

import App from './App'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(LineLoginButton)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
