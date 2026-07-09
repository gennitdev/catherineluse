import { createRouter, createWebHistory } from 'vue-router';
import ProfileLayout from '@/components/ProfileLayout.vue';
const SITE_NAME = 'Catherine Luse';
const DEFAULT_TITLE = 'Catherine Luse · Software Engineer';
const DEFAULT_DESCRIPTION = 'Software engineer with a frontend focus, building reliable web apps with Vue, React, TypeScript, and Node.js.';
const router = createRouter({
    history: createWebHistory('/'),
    scrollBehavior() {
        return { top: 0 };
    },
    routes: [
        {
            path: '/',
            component: ProfileLayout,
            children: [
                {
                    path: '',
                    name: 'WorkPortfolio',
                    component: () => import('@/views/WorkPortfolio.vue'),
                    meta: {
                        title: 'Work Portfolio',
                        description: "Catherine Luse's professional history as a software engineer, including work at HeartFlow, Flightcrew, and SUSE."
                    }
                },
                {
                    path: 'fun',
                    name: 'FunPortfolio',
                    component: () => import('@/views/FunPortfolio.vue'),
                    meta: {
                        title: 'Fun Portfolio',
                        description: 'Side projects by Catherine Luse: Multiforum, AI Beta Reader, and Clockwork Town.'
                    }
                },
                {
                    path: 'blog',
                    name: 'BlogList',
                    component: () => import('@/components/BlogList.vue'),
                    meta: { title: 'Blog' }
                },
                {
                    path: 'post/:slug',
                    name: 'BlogPost',
                    component: () => import('@/components/BlogPost.vue'),
                    meta: { title: 'Blog' }
                },
                {
                    path: 'contact',
                    name: 'Contact',
                    component: () => import('@/views/ContactView.vue'),
                    meta: {
                        title: 'Contact',
                        description: 'Get in touch with Catherine Luse.'
                    }
                },
                // Preserve old /work links now that the portfolio lives at /
                {
                    path: 'work',
                    redirect: '/'
                }
            ]
        }
    ]
});
// Keep the document title and social meta in sync with the active route.
// (Note: this is a client-rendered SPA, so crawlers that don't execute JS
// see the static defaults in index.html.)
const setMeta = (key, content, attr) => {
    let el = document.head.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
    }
    el.setAttribute('content', content);
};
router.afterEach((to) => {
    const pageTitle = to.meta?.title;
    const fullTitle = pageTitle ? `${pageTitle} · ${SITE_NAME}` : DEFAULT_TITLE;
    const description = to.meta?.description || DEFAULT_DESCRIPTION;
    document.title = fullTitle;
    setMeta('description', description, 'name');
    setMeta('og:title', fullTitle, 'property');
    setMeta('og:description', description, 'property');
    setMeta('twitter:title', fullTitle, 'name');
    setMeta('twitter:description', description, 'name');
});
export default router;
