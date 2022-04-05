<template>
  <div id="app">
    <Products/>
    <hr>
    <Cart/>
  </div>
</template>

<script>
import Products from './components/productList.vue'
import Cart from './components/productCart.vue'
export default {
  name: 'App',
  components: {
    Products, Cart
  }
}
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
