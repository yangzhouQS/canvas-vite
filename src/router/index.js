import {
  createWebHistory,
  createRouter
} from 'vue-router'
import home from '../pages/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: {
      title: '首页'
    },
    component: home
  },
  {
    path: '/konva',
    name: 'konva',
    meta: {
      title: 'konva首页'
    },
    component: () => import('../pages/konva/demo01.vue')
  }
]
const router = createRouter({
  history: createWebHistory(),
  routes
})
router.onError(handler => {
  console.log(`router error: ${ handler }`)
})
export {
  routes
}
export default router
