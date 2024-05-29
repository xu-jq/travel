import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'


Vue.config.productionTip = false
fastclick.attach(document.body)

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
