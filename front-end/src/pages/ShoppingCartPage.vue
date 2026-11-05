<template>
  <h1>Shopping Cart</h1>
</template>

<script> 
  import { cartItems } from '../temp-data'
  export default {
    name: "ShoppingCartPage",
    data () {
      return {
        cartItems
      }
    }
  }
</script>