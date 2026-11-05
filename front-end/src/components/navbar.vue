<template>
  <nav class="nav-bar">
    <ul>
      <li>
        <router-link to="/products" class="products-link">
          <div class="logo-wrap">
            <img :src="logo" alt="Two Trees Olive Oil logo">
          </div>
        </router-link>
      </li>
      <li>
        <router-link to="/cart" class="cart-link">
          Shopping Cart
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import logo from "@/assets/logo-hexagon.svg"
export default {
  name: "NavBar",
  data () {
    return {
      logo
    }
  }
}
</script>