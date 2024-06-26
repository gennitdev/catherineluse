declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'luxon'
declare module '@kangc/v-md-editor/lib/preview'
declare module '@kangc/v-md-editor/lib/theme/github.js'
