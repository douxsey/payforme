<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <PaymentList />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import PaymentList from './components/payments/PaymentList.vue';
import * as moment from "moment";

export default {
  name: 'app',
  components: {
    PaymentList
  }
}
</script>

<style>
@import url('./assets/css/style.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
