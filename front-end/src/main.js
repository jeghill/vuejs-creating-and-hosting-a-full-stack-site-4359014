import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import { createRouter, createWebHistory } from 'vue-router'
import ShoppingCartPage from './pages/ShoppingCartPage.vue'
import ProductDetailPage from './pages/ProductDetailPage.vue'
import ProductsPage from './pages/ProductsPage.vue'
import NotFoundPage from './pages/NotFoundPage.vue'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // creates back page history
  routes: [{
    path: '/cart',
    component: ShoppingCartPage,
  }, {
    path: '/products',
    component: ProductsPage,
  }, {
    path: '/products/:productId',
    component: ProductDetailPage,
  }, {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage
  }]
})

createApp(App)
.use(router)
.mount('#app')
