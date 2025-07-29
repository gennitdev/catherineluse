import { defineComponent } from 'vue'
import { useDisplay } from 'vuetify'
export default defineComponent({
  name: 'UserProfileSidebar',
  setup() {
    const { smAndDown } = useDisplay()
    return {
      navItems: {
        blogPosts: 'Blog Posts',
        contact: 'Contact'
      },
      profile: {
        name: 'Catherine Luse',
        profilePicURL: '/images/square-headshot-medium-size.png',
        intro: `Welcome to my personal website! I am a fullstack software engineer with a frontend focus. I am a lifelong learner and passionate about writing software that helps people, especially in the area of humane technology.`,
        contact: {
          phone: '+1 (623) 853-7028',
          email: 'catherine.luse@gmail.com',
          githubWork: 'https://github.com/catherineluse',
          githubPersonal: 'https://github.com/gennitdev',
          linkedin: 'https://www.linkedin.com/in/catherine-luse-a306911a8/',
          location: 'Phoenix, AZ'
        }
      },
      smAndDown
    }
  }
})
async function __VLS_template() {
  let __VLS_ctx
  /* Components */
  let __VLS_otherComponents
  let __VLS_own
  let __VLS_localComponents
  let __VLS_components
  let __VLS_styleScopedClasses
  let __VLS_resolvedLocalAndGlobalComponents
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({
    ...{ class: 'sticky top-0 rounded-lg px-8 py-12' },
    ...{ class: [!__VLS_ctx.smAndDown ? 'max-h-screen' : ''] }
  })
  __VLS_styleScopedClasses = [!smAndDown ? 'max-h-screen' : '']
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'mb-4 mt-6 flex flex-col gap-2' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'border' }, ...{ style: {} } })
  __VLS_elementAsFunction(__VLS_intrinsicElements.img)({
    src: __VLS_ctx.profile.profilePicURL,
    alt: 'Picture of Catherine Luse',
    ...{ class: 'object-cover' },
    ...{ style: {} }
  })
  // @ts-ignore
  ;[smAndDown, profile]
  if (__VLS_ctx.profile?.name) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.h1,
      __VLS_intrinsicElements.h1
    )({ ...{ class: 'mt-4 flex text-2xl font-bold text-gray-400' } })
    __VLS_ctx.profile.name
    // @ts-ignore
    ;[profile, profile]
  }
  if (__VLS_ctx.profile?.contact.location) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.p,
      __VLS_intrinsicElements.p
    )({ ...{ class: 'text-gray-400 text-sm' } })
    const __VLS_0 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ name: 'px-pin' }))
    const __VLS_2 = __VLS_1({ name: 'px-pin' }, ...__VLS_functionalComponentArgsRest(__VLS_1))
    ;({})({ name: 'px-pin' })
    // @ts-ignore
    ;[profile]
    const __VLS_5 = __VLS_pickFunctionalComponentCtx(__VLS_0, __VLS_2)
    __VLS_ctx.profile.contact.location
    // @ts-ignore
    ;[profile]
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.div,
    __VLS_intrinsicElements.div
  )({ ...{ class: 'flex flex-col gap-4' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h2,
    __VLS_intrinsicElements.h2
  )({ ...{ class: 'text-lg font-bold text-gray-400' } })
  if (__VLS_ctx.profile?.intro) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.p,
      __VLS_intrinsicElements.p
    )({ ...{ class: 'text-gray-400 text-sm' } })
    __VLS_ctx.profile.intro
    // @ts-ignore
    ;[profile, profile]
  }
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.h2,
    __VLS_intrinsicElements.h2
  )({ ...{ class: 'text-lg font-bold text-gray-400' } })
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.ul,
    __VLS_intrinsicElements.ul
  )({ ...{ class: 'text-gray-400 text-sm flex flex-col gap-1' } })
  if (__VLS_ctx.profile.contact.phone) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'flex items -center gap-2' } })
    const __VLS_6 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_7 = __VLS_asFunctionalComponent(
      __VLS_6,
      new __VLS_6({ name: 'px-device-phone', size: '24' })
    )
    const __VLS_8 = __VLS_7(
      { name: 'px-device-phone', size: '24' },
      ...__VLS_functionalComponentArgsRest(__VLS_7)
    )
    ;({})({ name: 'px-device-phone', size: '24' })
    // @ts-ignore
    ;[profile]
    const __VLS_11 = __VLS_pickFunctionalComponentCtx(__VLS_6, __VLS_8)
    __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({})
    __VLS_ctx.profile.contact.phone
    // @ts-ignore
    ;[profile]
  }
  if (__VLS_ctx.profile.contact.email) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'flex items -center gap-2' } })
    const __VLS_12 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_13 = __VLS_asFunctionalComponent(
      __VLS_12,
      new __VLS_12({ name: 'px-mail', size: '24' })
    )
    const __VLS_14 = __VLS_13(
      { name: 'px-mail', size: '24' },
      ...__VLS_functionalComponentArgsRest(__VLS_13)
    )
    ;({})({ name: 'px-mail', size: '24' })
    // @ts-ignore
    ;[profile]
    const __VLS_17 = __VLS_pickFunctionalComponentCtx(__VLS_12, __VLS_14)
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({ ...{ class: 'underline' }, href: 'mailto:' + __VLS_ctx.profile.contact.email })
    __VLS_ctx.profile.contact.email
    // @ts-ignore
    ;[profile, profile]
  }
  if (__VLS_ctx.profile.contact.linkedin) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'flex items -center gap-2' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({
      ...{ class: 'underline' },
      href: __VLS_ctx.profile.contact.linkedin,
      target: '_blank',
      rel: 'noopener noreferrer'
    })
    const __VLS_18 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_19 = __VLS_asFunctionalComponent(
      __VLS_18,
      new __VLS_18({ name: 'px-external-link', size: '16' })
    )
    const __VLS_20 = __VLS_19(
      { name: 'px-external-link', size: '16' },
      ...__VLS_functionalComponentArgsRest(__VLS_19)
    )
    ;({})({ name: 'px-external-link', size: '16' })
    // @ts-ignore
    ;[profile, profile]
    const __VLS_23 = __VLS_pickFunctionalComponentCtx(__VLS_18, __VLS_20)
  }
  if (__VLS_ctx.profile.contact.githubWork) {
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'flex items -center gap-2' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({
      ...{ class: 'underline' },
      href: __VLS_ctx.profile.contact.githubWork,
      target: '_blank',
      rel: 'noopener noreferrer'
    })
    const __VLS_24 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_25 = __VLS_asFunctionalComponent(
      __VLS_24,
      new __VLS_24({ name: 'px-external-link', size: '16' })
    )
    const __VLS_26 = __VLS_25(
      { name: 'px-external-link', size: '16' },
      ...__VLS_functionalComponentArgsRest(__VLS_25)
    )
    ;({})({ name: 'px-external-link', size: '16' })
    // @ts-ignore
    ;[profile, profile]
    const __VLS_29 = __VLS_pickFunctionalComponentCtx(__VLS_24, __VLS_26)
  }
  if (__VLS_ctx.profile.contact.githubPersonal) {
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({})
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.div,
      __VLS_intrinsicElements.div
    )({ ...{ class: 'flex items -center gap-2' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({
      ...{ class: 'underline' },
      href: __VLS_ctx.profile.contact.githubPersonal,
      target: '_blank',
      rel: 'noopener noreferrer'
    })
    const __VLS_30 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_31 = __VLS_asFunctionalComponent(
      __VLS_30,
      new __VLS_30({ name: 'px-external-link', size: '16' })
    )
    const __VLS_32 = __VLS_31(
      { name: 'px-external-link', size: '16' },
      ...__VLS_functionalComponentArgsRest(__VLS_31)
    )
    ;({})({ name: 'px-external-link', size: '16' })
    // @ts-ignore
    ;[profile, profile]
    const __VLS_35 = __VLS_pickFunctionalComponentCtx(__VLS_30, __VLS_32)
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.ul,
      __VLS_intrinsicElements.ul
    )({ ...{ class: 'list-disc ml-6' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'underline' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({
      href: 'https://github.com/gennit-project/multiforum-frontend',
      target: '_blank',
      rel: 'noopener noreferrer'
    })
    const __VLS_36 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_37 = __VLS_asFunctionalComponent(
      __VLS_36,
      new __VLS_36({ name: 'px-external-link', size: '16' })
    )
    const __VLS_38 = __VLS_37(
      { name: 'px-external-link', size: '16' },
      ...__VLS_functionalComponentArgsRest(__VLS_37)
    )
    ;({})({ name: 'px-external-link', size: '16' })
    const __VLS_41 = __VLS_pickFunctionalComponentCtx(__VLS_36, __VLS_38)
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.li,
      __VLS_intrinsicElements.li
    )({ ...{ class: 'underline' } })
    __VLS_elementAsFunction(
      __VLS_intrinsicElements.a,
      __VLS_intrinsicElements.a
    )({
      href: 'https://github.com/gennit-project/multiforum-backend',
      target: '_blank',
      rel: 'noopener noreferrer'
    })
    const __VLS_42 = {}.VIcon
    ;({}).VIcon
    __VLS_components.VIcon
    __VLS_components.vIcon
    // @ts-ignore
    ;[VIcon]
    const __VLS_43 = __VLS_asFunctionalComponent(
      __VLS_42,
      new __VLS_42({ name: 'px-external-link', size: '16' })
    )
    const __VLS_44 = __VLS_43(
      { name: 'px-external-link', size: '16' },
      ...__VLS_functionalComponentArgsRest(__VLS_43)
    )
    ;({})({ name: 'px-external-link', size: '16' })
    const __VLS_47 = __VLS_pickFunctionalComponentCtx(__VLS_42, __VLS_44)
  }
  __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({})
  __VLS_elementAsFunction(
    __VLS_intrinsicElements.a,
    __VLS_intrinsicElements.a
  )({ href: __VLS_ctx.resumeUrl, download: 'CatherineLuseResume.pdf' })
  __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({})
  const __VLS_48 = {}.VIcon
  ;({}).VIcon
  __VLS_components.VIcon
  __VLS_components.vIcon
  // @ts-ignore
  ;[VIcon]
  const __VLS_49 = __VLS_asFunctionalComponent(
    __VLS_48,
    new __VLS_48({ name: 'px-download', size: '24' })
  )
  const __VLS_50 = __VLS_49(
    { name: 'px-download', size: '24' },
    ...__VLS_functionalComponentArgsRest(__VLS_49)
  )
  ;({})({ name: 'px-download', size: '24' })
  // @ts-ignore
  ;[resumeUrl]
  const __VLS_53 = __VLS_pickFunctionalComponentCtx(__VLS_48, __VLS_50)
  if (typeof __VLS_styleScopedClasses === 'object' && !Array.isArray(__VLS_styleScopedClasses)) {
    __VLS_styleScopedClasses['sticky']
    __VLS_styleScopedClasses['top-0']
    __VLS_styleScopedClasses['rounded-lg']
    __VLS_styleScopedClasses['px-8']
    __VLS_styleScopedClasses['py-12']
    __VLS_styleScopedClasses['mb-4']
    __VLS_styleScopedClasses['mt-6']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['flex-col']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['border']
    __VLS_styleScopedClasses['object-cover']
    __VLS_styleScopedClasses['mt-4']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['text-2xl']
    __VLS_styleScopedClasses['font-bold']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-sm']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['flex-col']
    __VLS_styleScopedClasses['gap-4']
    __VLS_styleScopedClasses['text-lg']
    __VLS_styleScopedClasses['font-bold']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-sm']
    __VLS_styleScopedClasses['text-lg']
    __VLS_styleScopedClasses['font-bold']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-gray-400']
    __VLS_styleScopedClasses['text-sm']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['flex-col']
    __VLS_styleScopedClasses['gap-1']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items']
    __VLS_styleScopedClasses['-center']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items']
    __VLS_styleScopedClasses['-center']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['underline']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items']
    __VLS_styleScopedClasses['-center']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['underline']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items']
    __VLS_styleScopedClasses['-center']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['underline']
    __VLS_styleScopedClasses['flex']
    __VLS_styleScopedClasses['items']
    __VLS_styleScopedClasses['-center']
    __VLS_styleScopedClasses['gap-2']
    __VLS_styleScopedClasses['underline']
    __VLS_styleScopedClasses['list-disc']
    __VLS_styleScopedClasses['ml-6']
    __VLS_styleScopedClasses['underline']
    __VLS_styleScopedClasses['underline']
  }
  var __VLS_slots
  return __VLS_slots
}
