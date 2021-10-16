import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router/index.js'

// 引入 Vant 组件库和 Vant 样式
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.config.productionTip = false
Vue.use(Vant)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
