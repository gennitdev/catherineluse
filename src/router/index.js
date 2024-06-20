import { createRouter, createWebHistory } from 'vue-router';
import BlogList from '@/components/BlogList.vue';
import BlogPost from '@/components/BlogPost.vue';
import ProfileLayout from '@/components/ProfileLayout.vue';
const router = createRouter({
    history: createWebHistory('/'),
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
                }
            ]
        }
    ]
});
export default router;
