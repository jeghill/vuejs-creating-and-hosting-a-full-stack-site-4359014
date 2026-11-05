<template>
<NavBar />
<div class="page-wrap">
  <router-view></router-view>
</div>

</template>

<script>
import NavBar from '@/components/navbar.vue'
export default {
  name: 'App',
  components: {
    NavBar
   },
}
</script>

