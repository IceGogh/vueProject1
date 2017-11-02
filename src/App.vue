<template>
  <div id="heytoo">
    <p class="dataColor">{{ msg }}</p>
    <img src="./assets/logo.png">
    <HelloWorld2></HelloWorld2>
    <myooo/>
  </div>
</template>

<script>
import HelloWorld2 from './components/HelloWorld'
import myooo from './components/owner-component'

export default {
  components: {
    HelloWorld2,
    myooo
  },
  data () {
    return {
      msg: 'App.vue组件自身的 data.msg 数据'
    }
  }
}
</script>

<style>
#heytoo {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.dataColor {
  color: red;
}
.dataColor2 {
  color: blue;
}
</style>
