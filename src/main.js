import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { PxChevronLeft, PxExternalLink, PxMail, PxDevicePhone, PxPin, PxDownload } from 'oh-vue-icons/icons';
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
import hljs from 'highlight.js';
addIcons(PxChevronLeft, PxExternalLink, PxMail, PxDevicePhone, PxPin, PxDownload);
const vuetify = createVuetify({
    components,
    directives,
    icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi
        }
    }
});
VMdPreview.use(githubTheme, {
    Hljs: hljs
});
const app = createApp(App);
app.component('v-icon', OhVueIcon);
app.use(router);
app.use(vuetify).use(VMdPreview);
app.mount('#app');
