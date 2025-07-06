import App from './App'
import '/styles/index.scss'

import myTab from '/pages/common/tabbar.vue'
import myImg from '/pages/common/image.vue'
import mySearch from '/pages/common/input.vue'
import myField from '/pages/common/field.vue'
import newNav from '/pages/common/navBar.vue'
import houseTab from '/pages/common/houseTab.vue'
import iceImg from '/pages/common/img.vue'
import myLine from '/pages/common/line.vue'

// import store from '/store/index.js''
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  app.component('myTab', myTab)
  app.component('myImg', myImg)
  app.component('mySearch', mySearch)
  app.component('myField', myField)
  app.component('newNav', newNav)
  app.component('houseTab', houseTab)
  app.component('iceImg', iceImg)
  app.component('myLine', myLine)

  return {
    app
  }
}
// #endif