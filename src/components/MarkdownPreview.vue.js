import { computed, defineComponent } from 'vue';
import MarkdownIt from 'markdown-it';
import { ref } from 'vue';
function calculateAspectRatioFit(srcWidth, srcHeight, maxWidth, maxHeight) {
    const ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);
    return { width: srcWidth * ratio, height: srcHeight * ratio };
}
function parseMarkdownForImages(text) {
    const md = new MarkdownIt();
    const renderedText = md.render(text);
    const regex = /src="([^"]*)"/g;
    const images = [];
    let match;
    while ((match = regex.exec(renderedText)) !== null) {
        const src = match[1];
        const galleryItem = {
            href: src,
            src,
            thumbnail: src,
            width: window.innerWidth,
            height: window.innerHeight
        };
        images.push(galleryItem);
    }
    return images;
}
export default defineComponent({
    props: {
        disableGallery: {
            type: Boolean,
            default: false
        },
        showShowMore: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            required: true
        },
        wordLimit: {
            type: Number,
            default: 100
        }
    },
    setup(props) {
        // Define your reactive properties
        const embeddedImages = ref([]);
        const countWords = (str) => {
            return str.trim().split(/\s+/).length;
        };
        const showFullText = ref(!props.showShowMore || countWords(props.text) < props.wordLimit);
        const shouldShowMoreButton = computed(() => {
            if (!props.showShowMore) {
                return false;
            }
            if (!props.text) {
                return false;
            }
            const words = props.text.split(' ');
            return words.length > props.wordLimit;
        });
        const toggleShowFullText = () => {
            showFullText.value = !showFullText.value;
        };
        const shownText = computed(() => {
            if (showFullText.value) {
                return props.text;
            }
            const words = props.text.split(' ');
            if (words.length > props.wordLimit) {
                return (words.slice(0, props.wordLimit).join(' ') + (words.length > props.wordLimit ? '...' : ''));
            }
            return props.text;
        });
        return {
            embeddedImages,
            shownText,
            showFullText,
            toggleShowFullText,
            shouldShowMoreButton
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("w-full") }, });
    const __VLS_0 = {}.VMdPreview;
    ({}.VMdPreview);
    __VLS_components.VMdPreview;
    __VLS_components.vMdPreview;
    // @ts-ignore
    [VMdPreview,];
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ text: ((__VLS_ctx.shownText)), }));
    const __VLS_2 = __VLS_1({ text: ((__VLS_ctx.shownText)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    ({}({ text: ((__VLS_ctx.shownText)), }));
    // @ts-ignore
    [shownText,];
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2);
    if (__VLS_ctx.shouldShowMoreButton) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleShowFullText) }, ...{ class: ("mb-8 text-sm text-blue-600 hover:underline") }, });
        (__VLS_ctx.showFullText ? '...Show Less' : '...Show More');
        // @ts-ignore
        [shouldShowMoreButton, toggleShowFullText, showFullText,];
    }
    if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
        __VLS_styleScopedClasses['w-full'];
        __VLS_styleScopedClasses['mb-8'];
        __VLS_styleScopedClasses['text-sm'];
        __VLS_styleScopedClasses['text-blue-600'];
        __VLS_styleScopedClasses['hover:underline'];
    }
    var __VLS_slots;
    return __VLS_slots;
    const __VLS_componentsOption = {};
    const __VLS_name = undefined;
    const __VLS_internalComponent = (await import('./MarkdownPreview.vue')).default;
}
