// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import cca from './App'

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  el: '#heytoo',
  template: '<cc/>',
  components: {cc: cca}
})
