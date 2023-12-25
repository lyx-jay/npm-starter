import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')



window.parent.postMessage('子页面向父页面发送消息', 'http://localhost:5173/')
