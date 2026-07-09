import { createRouter, createWebHistory } from 'vue-router'
import BlogList from '@/components/BlogList.vue'
import BlogPost from '@/components/BlogPost.vue'
import ProfileLayout from '@/components/ProfileLayout.vue'
import WorkPortfolio from '@/views/WorkPortfolio.vue'
import FunPortfolio from '@/views/FunPortfolio.vue'
import ContactView from '@/views/ContactView.vue'

const router = createRouter({
  history: createWebHistory('/'),
  scrollBehavior() {
    return { top: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'ProfileLayout',
      component: ProfileLayout,
      children: [
        {
          path: '/',
          name: 'BlogList',
          component: BlogList
        },
        {
          path: '/post/:slug',
          name: 'BlogPost',
          component: BlogPost
        },
        {
          path: '/work',
          name: 'WorkPortfolio',
          component: WorkPortfolio
        },
        {
          path: '/fun',
          name: 'FunPortfolio',
          component: FunPortfolio
        },
        {
          path: '/contact',
          name: 'Contact',
          component: ContactView
        }
      ]
    }
  ]
})

export default router
