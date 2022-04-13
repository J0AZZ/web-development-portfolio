import {BCard, BootstrapVue, BTable} from 'bootstrap-vue'
import Vue from 'vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

Vue.component("b-table", BTable)
Vue.component("b-card", BCard)

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.use(BootstrapVue)
