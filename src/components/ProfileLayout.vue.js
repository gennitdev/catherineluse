import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import { relativeTime } from '@/utils/dateTimeUtils';
import { useDisplay } from 'vuetify';
import UserProfileSidebar from './UserProfileSidebar.vue';
export default defineComponent({
    name: 'ProfileLayout',
    components: {
        UserProfileSidebar
    },
    setup() {
        const route = useRoute();
        const profile = {
            profilePicURL: '/posts/sample-post/square-headshot-medium-size.jpeg',
            displayName: 'Catherine Luse'
        };
        const { smAndDown } = useDisplay();
        return {
            relativeTime,
            route,
            smAndDown,
            profile,
            theme: 'dark'
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("max-w-7xl") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.article, __VLS_intrinsicElements.article)({ ...{ class: ("relative z-0 flex-1 focus:outline-none xl:order-last") }, });
    const __VLS_0 = {}.VRow;
    ({}.VRow);
    ({}.VRow);
    __VLS_components.VRow;
    __VLS_components.vRow;
    __VLS_components.VRow;
    __VLS_components.vRow;
    // @ts-ignore
    [VRow, VRow,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("flex flex-row") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("flex flex-row") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ ...{ class: ("flex flex-row") }, }));
    const __VLS_6 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ cols: ((__VLS_ctx.smAndDown ? 12 : 4)), }));
    const __VLS_8 = __VLS_7({ cols: ((__VLS_ctx.smAndDown ? 12 : 4)), }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    ({}({ cols: ((__VLS_ctx.smAndDown ? 12 : 4)), }));
    const __VLS_12 = {}.UserProfileSidebar;
    ({}.UserProfileSidebar);
    __VLS_components.UserProfileSidebar;
    // @ts-ignore
    [UserProfileSidebar,];
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    ({}({}));
    // @ts-ignore
    [smAndDown,];
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14);
    (__VLS_11.slots).default;
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8);
    const __VLS_18 = {}.VCol;
    ({}.VCol);
    ({}.VCol);
    __VLS_components.VCol;
    __VLS_components.vCol;
    __VLS_components.VCol;
    __VLS_components.vCol;
    // @ts-ignore
    [VCol, VCol,];
    const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({ ...{ class: (([!__VLS_ctx.smAndDown ? 'px-12' : ''])) }, cols: ((!__VLS_ctx.smAndDown ? 8 : 12)), }));
    const __VLS_20 = __VLS_19({ ...{ class: (([!__VLS_ctx.smAndDown ? 'px-12' : ''])) }, cols: ((!__VLS_ctx.smAndDown ? 8 : 12)), }, ...__VLS_functionalComponentArgsRest(__VLS_19));
    ({}({ ...{ class: (([!__VLS_ctx.smAndDown ? 'px-12' : ''])) }, cols: ((!__VLS_ctx.smAndDown ? 8 : 12)), }));
    __VLS_styleScopedClasses = ([!smAndDown ? 'px-12' : '']);
    const __VLS_24 = {}.VContainer;
    ({}.VContainer);
    ({}.VContainer);
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    __VLS_components.VContainer;
    __VLS_components.vContainer;
    // @ts-ignore
    [VContainer, VContainer,];
    const __VLS_25 = __VLS_asFunctionalComponent(__VLS_24, new __VLS_24({ fluid: (true), }));
    const __VLS_26 = __VLS_25({ fluid: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_25));
    ({}({ fluid: (true), }));
    const __VLS_30 = {}.RouterView;
    ({}.RouterView);
    __VLS_components.RouterView;
    __VLS_components.routerView;
    // @ts-ignore
    [RouterView,];
    const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({}));
    const __VLS_32 = __VLS_31({}, ...__VLS_functionalComponentArgsRest(__VLS_31));
    ({}({}));
    // @ts-ignore
    [smAndDown, smAndDown,];
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32);
    (__VLS_29.slots).default;
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26);
    (__VLS_23.slots).default;
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20);
    (__VLS_5.slots).default;
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['max-w-7xl'];
        __VLS_styleScopedClasses['relative'];
        __VLS_styleScopedClasses['z-0'];
        __VLS_styleScopedClasses['flex-1'];
        __VLS_styleScopedClasses['focus:outline-none'];
        __VLS_styleScopedClasses['xl:order-last'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['flex-row'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {
        UserProfileSidebar
    };
    const __VLS_name = 'ProfileLayout';
    const __VLS_internalComponent = (await import('./ProfileLayout.vue')).default;
}
