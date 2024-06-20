import { defineComponent, ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import MarkdownIt from 'markdown-it';
import axios from 'axios';
export default defineComponent({
    setup() {
        const route = useRoute();
        const content = ref('');
        const loadPost = async (slug) => {
            try {
                const response = await axios.get(`/posts/${slug}/post.md`);
                const md = new MarkdownIt();
                content.value = md.render(response.data);
            }
            catch (error) {
                console.error('Error loading post:', error);
            }
        };
        watch(() => route.params.slug, (newSlug) => {
            if (newSlug) {
                loadPost(newSlug);
            }
        }, { immediate: true });
        onMounted(() => {
            if (route.params.slug) {
                loadPost(route.params.slug);
            }
        });
        return {
            content
        };
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    const __VLS_0 = {}.RouterLink;
    ({}.RouterLink);
    ({}.RouterLink);
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    __VLS_components.RouterLink;
    __VLS_components.routerLink;
    // @ts-ignore
    [RouterLink, RouterLink,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("text-blue-500 hover:underline flex items-center") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("text-blue-500 hover:underline flex items-center") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ to: ("/"), ...{ class: ("text-blue-500 hover:underline flex items-center") }, }));
    const __VLS_6 = {}.VIcon;
    ({}.VIcon);
    __VLS_components.VIcon;
    __VLS_components.vIcon;
    // @ts-ignore
    [VIcon,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ name: ("px-chevron-left"), }));
    const __VLS_8 = __VLS_7({ name: ("px-chevron-left"), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ name: ("px-chevron-left"), }));
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("ml-1") }, });
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_directiveFunction(__VLS_ctx.vHtml)((__VLS_ctx.content));
    // @ts-ignore
    [vHtml, content,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['text-blue-500'];
        __VLS_styleScopedClasses['hover:underline'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['items-center'];
        __VLS_styleScopedClasses['ml-1'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./BlogPost.vue')).default;
}
