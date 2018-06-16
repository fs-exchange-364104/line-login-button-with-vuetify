import Vue from 'vue'
import Vuetify from 'vuetify'

import App from './App'
import LineLoginButton from 'line-login-button'

Vue.config.productionTip = false

Vue.use(Vuetify)
Vue.use(LineLoginButton)

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
})
