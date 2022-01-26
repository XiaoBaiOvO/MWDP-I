import Vue from 'vue'
import Router from 'vue-router'
import PageRouter from './pages'
import ErrorRouter from './error'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('../views/Index'),
      children: [].concat(PageRouter)
    },
    {
      path: '/index',
      name: 'Index',
      component: () => import('../views/Index'),
      children: [].concat(PageRouter)
    },

    {
      path: "/error",
      name: "Error",
      component: () => import('../views/Index'),
      children: [].concat(ErrorRouter)
    },

    // {
    //   path: "*",
    //   redirect: "/error/404"
    // }
  ]
});