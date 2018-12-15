import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/project_module',
      component: () => import(/* webpackChunkName: "about" */ './views/ProjectModule.vue')
    },
    {
      path: '/collection_module',
      component: () => import(/* webpackChunkName: "about" */ './views/CollectionModule.vue')
    },
    {
      path: '/meta_collection_module',
      component: () => import(/* webpackChunkName: "about" */ './views/MetaCollectionModule.vue')
    },
    {
      path: '/multi_meta_collection_module',
      component: () => import(/* webpackChunkName: "about" */ './views/MultiMetaCollectionModule.vue')
    }
  ]
})
