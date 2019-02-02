import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
Vue.$configApi = {
  url: "http://localhost:9000/api/"
}
new Vue({
  render: h => h(App),
}).$mount('#app')
