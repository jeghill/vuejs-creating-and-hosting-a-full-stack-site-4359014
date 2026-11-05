import { createApp } from 'vue'
import App from './App.vue'
import * as VueRouter from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import ProductsPage from './pages/ProductsPage.vue'

createApp(App)
.use(VueRouter).createRouter({
  history: VueRouter.createWebHistory(process.env.BASE_URL), // creates back page history
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductDetailPage,
  }, {
    path: '/product/:productId',
    component: ProductsPage,
  }]
})
.mount('#app')
