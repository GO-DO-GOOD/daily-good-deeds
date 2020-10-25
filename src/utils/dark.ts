import { watch, computed } from 'vue'
import { usePreferredDark } from '@vueuse/core'
import { colorSchema, local } from '../store'

const preferredDark = usePreferredDark()

export const isDark = computed({
  get() {
    return colorSchema.value === 'auto' ? preferredDark.value : colorSchema.value === 'dark'
  },
  set(v: boolean) {
    if (v === preferredDark.value)
      colorSchema.value = 'auto'
    else
      colorSchema.value = v ? 'dark' : 'light'
  },
})

watch(
  isDark,
  v => document.documentElement.classList.toggle('dark', v),
  { immediate: true },
)

export const lang = computed({
  get() {
    return local.value
  },
  set(lang: 'de' | 'en') {
    local.value = lang
  },
})
