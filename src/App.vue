<template>
  <div id="background" :class="background" class="min-h-screen w-full text-white">
    <div class="flex flex-col flex-initial">
      <header class="flex justify-center">
        <div class="p-4 m-2">
          <img src="/logo-letter.png" class="h-56" alt="GO DO GOOD Logo">
        </div>
      </header>
      <div class="flex justify-center">
        <div class="p-2">
          <a rel="noopener" :class="{ 'font-bold': lang === 'de' }" @click="setLang('de')">DE</a>
          |
          <a rel="noopener" :class="{ 'font-bold': lang === 'en' }" @click="setLang('en')">EN</a>
        </div>
      </div>

      <div
        class="flex flex-col justify-center justify-self-stretch items-center text-center text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold"
      >
        <div
          v-html="quote"
          style="hyphens:manual;"
          class="leading-tight uppercase md:leading-tight lg:leading-snug font-display p-4 my-2 mx-4 lg:p-4 lg:mx-16 xl:p-10 xl:mx-32"/>

        <div class="mt-4 pb-16 mb-16">
          <a class="text-base font-normal xl:text-xl text-white py-2 px-4 rounded-full border border-white hover:border-transparent" @click="toggle()">
            {{ more }}
          </a>
        </div>
      </div>

      <footer class="flex flex-col justify-center text-center items-center">
        <div class="">
          <span class="font-body">{{ slogan }}</span>
        </div>
        <div>
          <span class="text-2xl tracking-widest font-serif">{{ suffix }}</span>
        </div>
        <div class="flex flex-row text-3xl my-4">
          <a title="Facebook" href="https://www.facebook.com/GoDoGood2020/" rel="noreferrer" target="_blank">
            <Icon class="m-4" icon="cib:facebook" />
          </a>
          <a title="Instagram" href="https://www.instagram.com/godogood2020/" rel="noreferrer" target="_blank">
            <Icon class="m-4" icon="entypo-social:instagram-with-circle" />
          </a>
          <a title="E-Mail" href="mailto:godogood2020@gmail.com">
            <Icon class="m-4" icon="icomoon-free:mail4" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { lang } from '/~/utils'
import de from '/lang/de.json'
import en from '/lang/en.json'

export default {
  setup() {
    const background = ref<string>(`bg-circle-${Math.floor(Math.random() * 25) + 1}`)
    const quote = ref<string>(lang.value === 'de' ? getQuote(de) : getQuote(en))
    const more = ref<string>(lang.value === 'de' ? 'NOCH EINE, BITTE!' : 'ONE MORE PLEASE!')
    const slogan = ref<string>(lang.value === 'de' ? 'DEINE TÄGLICHE GUTE TAT FÜR THE GOOD CHALLENGE IM NOVEMBER 2020' : 'YOUR DAILY GOOD DEED FOR THE GOOD CHALLENGE IN NOVEMBER 2020')
    const suffix = ref<string>(lang.value === 'de' ? 'Mach mit und lass Dich inspirieren!' : 'Join now and get inspired!')
    const themeColor = document.querySelector('head meta[name="theme-color"]')

    function toggle() {
      let prevBackground = background.value;
      let nextBackground = `bg-circle-${Math.floor(Math.random() * 25) + 1}`;
      background.value = (prevBackground === nextBackground) ? `bg-circle-${Math.floor(Math.random() * 25) + 1}`: nextBackground; 
      quote.value = lang.value === 'de' ? getQuote(de) : getQuote(en)

      // themeColor.setAttribute('content');
    }

    function setLang(l: 'de' | 'en') {
      lang.value = l
      quote.value = l === 'de' ? getQuote(de) : getQuote(en)
      more.value = l === 'de' ? 'NOCH EINE, BITTE!' : 'ONE MORE, PLEASE!'
      slogan.value = l === 'de' ? 'DEINE TÄGLICHE GUTE TAT FÜR THE GOOD CHALLENGE IM NOVEMBER 2020' : 'YOUR DAILY GOOD DEED FOR THE GOOD CHALLENGE IN NOVEMBER 2020'
      suffix.value = l === 'de' ? 'Mach mit und lass Dich inspirieren!' : 'Join now and get inspired!'
    }

    function getQuote(quotes: Array<string>) {
      return quotes[Math.floor(Math.random() * quotes.length)]
    }

    return {
      background,
      quote,
      toggle,
      lang,
      setLang,
      more,
      slogan,
      suffix,
    }
  },
}
</script>
