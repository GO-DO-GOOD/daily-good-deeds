import { Ref } from 'vue'
import { useStorage } from '@vueuse/core'

export const colorSchema = useStorage('schema', 'auto') as Ref<'auto' | 'dark' | 'light'>

export const local = useStorage('lang', 'de') as Ref<'de' | 'en'>
