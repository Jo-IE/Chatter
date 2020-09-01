import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/views/dashboard/Index'),
      children: [
        // Dashboard
        {
          name: 'Dashboard',
          path: '',
          component: () => import('@/views/dashboard/Dashboard'),
        },
        // New Post
        {
          name: 'New Post',
          path: 'pages/newpost',
          component: () => import('@/views/dashboard/pages/NewPost'),
        },
       // Search Posts
        {
          name: 'Search Posts',
          path: 'pages/search-posts',
          component: () => import('@/views/dashboard/pages/SearchPosts'),
        },
        // All Posts
        {
          name: 'All Posts',
          path: 'pages/all-posts',
          component: () => import('@/views/dashboard/pages/AllPosts'),
        },

      ],
    },
  ],
})
