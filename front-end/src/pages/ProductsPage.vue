<template>
  <h1>Products</h1>
  <div class="grid-wrap">
    <div class="product-item" 
    v-for="product in products"
    :key="product">
      <img :src="product.imageName"/>
      <h3 class="prodcut-name"> {{  product.name }}</h3>
      <p class="product-price"> {{  product.price }}</p>
      <router-link :to="'/products/' + product.id">View Details</router-link>
    </div>
  </div>
</template>

<script> 
  import { products } from '../temp-data.js'
  export default {
    name: "ProductsPage",
    data () {
      return {
        products
      }
    }
  }
</script>