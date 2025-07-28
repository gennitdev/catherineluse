const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const hostedDemoLink = 'https://topical.space/forums/cats/discussions';
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    let __VLS_ctx;
    /* Components */
    let __VLS_otherComponents;
    let __VLS_own;
    let __VLS_localComponents;
    let __VLS_components;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-green-500 p-4 text-white text-lg flex justify-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.a, __VLS_intrinsicElements.a)({ href: ((__VLS_ctx.hostedDemoLink)), target: ("_blank"), ...{ class: ("underline cursor:hover") }, });
    // @ts-ignore
    const __VLS_0 = {}
        .VIcon;
    ({}.VIcon);
    __VLS_components.VIcon;
    __VLS_components.vIcon;
    // @ts-ignore
    [VIcon,];
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: ("px-external-link"), size: ("16"), }));
    const __VLS_2 = __VLS_1({ name: ("px-external-link"), size: ("16"), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ name: ("px-external-link"), size: ("16"), }));
    const __VLS_5 = __VLS_nonNullable(__VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2));
    // @ts-ignore
    [hostedDemoLink,];
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['bg-green-500'];
        __VLS_styleScopedClasses['p-4'];
        __VLS_styleScopedClasses['text-white'];
        __VLS_styleScopedClasses['text-lg'];
        __VLS_styleScopedClasses['flex'];
        __VLS_styleScopedClasses['justify-center'];
        __VLS_styleScopedClasses['underline'];
        __VLS_styleScopedClasses['cursor:hover'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    let __VLS_name;
    let __VLS_defineComponent;
    const __VLS_internalComponent = __VLS_defineComponent({
        setup() {
            return {
                hostedDemoLink: hostedDemoLink,
            };
        },
    });
}
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
});
;
