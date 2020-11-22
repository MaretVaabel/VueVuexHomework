import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: {
        name: "login"
    }
},
  {
    path: '/main',
    name: 'App',
    component: () => import('../App.vue'),
    children: [ 
      { path: ' ', name: 'post', component: () => import('../views/home/Posts.vue') },
      
    ]
  },
  { path: '/browse', name: 'browse', component: () => import('../views/home/Browse.vue') },
  {
    path: '/login',
    name: "login",
    component: () => import('../views/account/Login.vue')
  },
  { path: '/post', name: 'post', component: () => import('../views/home/Posts.vue') },

]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router