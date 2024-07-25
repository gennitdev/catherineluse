import { defineComponent, ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { relativeTime } from '@/utils/dateTimeUtils';
import { useDisplay } from 'vuetify';
import axios from 'axios';
import MarkdownIt from 'markdown-it';
import MarkdownPreview from '@/components/MarkdownPreview.vue';
export default defineComponent({
    name: 'BlogList',
    components: {
        MarkdownPreview
    },
    setup() {
        const route = useRoute();
        const profile = {
            profilePicURL: '/images/square-headshot-medium-size.jpeg',
            displayName: 'Catherine Luse'
        };
        const { smAndDown } = useDisplay();
        const posts = ref([]);
        const md = new MarkdownIt();
        const fetchPostContent = async (slug) => {
            try {
                const response = await axios.get(`/posts/${slug}/post.md`);
                return response.data;
            }
            catch (error) {
                console.error('Error loading post:', error);
                return '';
            }
        };
        const loadPosts = async () => {
            const postList = [
                {
                    title: 'Video Demo of Multiforum',
                    slug: 'video_demo',
                    createdAt: '2024-07-25T23:10:08.831Z'
                },
                {
                    title: 'Multiforum Demo Part 1: Event Search',
                    slug: 'events',
                    createdAt: '2024-06-20T00:34:16.027Z'
                },
                {
                    title: 'Multiforum Demo Part 2: Discussions',
                    slug: 'discussions',
                    createdAt: '2024-06-20T00:34:16.027Z'
                },
                {
                    title: 'Multiforum Demo Part 3: Finding forums',
                    slug: 'forums',
                    createdAt: '2024-06-20T00:34:16.027Z'
                }
            ];
            const loadedPosts = await Promise.all(postList.map(async (post) => {
                const content = await fetchPostContent(post.slug);
                return { ...post, content };
            }));
            posts.value = loadedPosts;
        };
        onMounted(() => {
            loadPosts();
        });
        return {
            posts,
            md,
            route,
            profile,
            smAndDown
        };
    },
    methods: {
        getRelativeTime(date) {
            return relativeTime(date);
        }
    }
});
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
    for (const [post] of __VLS_getVForSourceType((__VLS_ctx.posts))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((post.slug)), ...{ class: ("relative my-1 flex-col rounded-lg border bg-white py-6 px-8") }, });
        const __VLS_0 = {}.RouterLink;
        ({}.RouterLink);
        ({}.RouterLink);
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        __VLS_components.RouterLink;
        __VLS_components.routerLink;
        // @ts-ignore
        [RouterLink, RouterLink,];
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: (({ name: 'BlogPost', params: { slug: post.slug } })), }));
        const __VLS_2 = __VLS_1({ to: (({ name: 'BlogPost', params: { slug: post.slug } })), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        ({}({ to: (({ name: 'BlogPost', params: { slug: post.slug } })), }));
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({ ...{ class: ("cursor-pointer hover:text-gray-500 font-bold text-lg") }, });
        (post.title);
        // @ts-ignore
        [posts,];
        (__VLS_5.slots).default;
        const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-gray-500") }, });
        (`Catherine posted ${__VLS_ctx.getRelativeTime(post.createdAt)}`);
        // @ts-ignore
        [getRelativeTime,];
        if (post?.content) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("my-2 border-gray-400") }, });
            const __VLS_6 = {}.MarkdownPreview;
            ({}.MarkdownPreview);
            __VLS_components.MarkdownPreview;
            // @ts-ignore
            [MarkdownPreview,];
            const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ text: ((post.content)), disableGallery: ((true)), wordLimit: ((100)), }));
            const __VLS_8 = __VLS_7({ text: ((post.content)), disableGallery: ((true)), wordLimit: ((100)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
            ({}({ text: ((post.content)), disableGallery: ((true)), wordLimit: ((100)), }));
            const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
        }
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['my-1'];
        __VLS_styleScopedClasses['flex-col'];
        __VLS_styleScopedClasses['rounded-lg'];
        __VLS_styleScopedClasses['border'];
        __VLS_styleScopedClasses['bg-white'];
        __VLS_styleScopedClasses['py-6'];
        __VLS_styleScopedClasses['px-8'];
        __VLS_styleScopedClasses['cursor-pointer'];
        __VLS_styleScopedClasses['hover:text-gray-500'];
        __VLS_styleScopedClasses['font-bold'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['text-gray-500'];
        __VLS_styleScopedClasses['my-2'];
        __VLS_styleScopedClasses['border-gray-400'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        MarkdownPreview
    };
    const __VLS_name = 'BlogList';
    const __VLS_internalComponent = (await import('./BlogList.vue')).default;
}
