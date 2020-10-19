<template>
  <div :class="background" class="min-h-screen w-full text-white">
    <div class="flex flex-col flex-initial">
      <div class="flex justify-center">
        <div class="p-4 m-2">
          <img src="/logo-letter.png" class="h-56" />
        </div>
      </div>

      <div
        class="flex flex-col justify-center justify-self-stretch items-center text-center text-2xl xl:text-6xl font-bold"
      >
        <div class="uppercase font-display p-8 lg:p-16 xl:p-24 my-2 mx-8 lg:mx-64 xl:mx-96">
          {{quote}}
        </div>

        <div class="pb-16 mb-16">
          <Icon class="text-7xl" icon="mdi:arrow-down-bold-circle" @click="toggle()" />
        </div>
      </div>

      <footer class="flex flex-col justify-center text-center items-center">
        <div class="">
          <span class="font-body">DEINE TÄGLICHE GUTE TAT FÜR THE GOOD CHALLENGE IM NOVEMBER 2020</span> - <span class="font-serif">Mach mit und lass dich inspirieren</span>!
        </div>
        <div class="flex flex-row text-3xl">
          <a href="https://www.facebook.com/GoDoGood2020/" target="_blank">
            <Icon class="m-4" icon="cib:facebook" />
          </a>
          <a href="https://www.instagram.com/godogood2020/" target="_blank">
            <Icon class="m-4" icon="entypo-social:instagram-with-circle" />
          </a>
          <a href="mailto:godo.good?subject=Hab%20eine%20Idee">
            <Icon class="m-4" icon="icomoon-free:mail4" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import quotes from '/lang/de.json'

export default {
  setup() {
    const background = ref<string>(`bg-circle-${Math.floor(Math.random() * 16) + 1}`)
    const quote = ref<string>(quotes[Math.floor(Math.random() * quotes.length)])

    function toggle() {
      background.value = `bg-circle-${Math.floor(Math.random() * 16) + 1}`
      quote.value = quotes[Math.floor(Math.random() * quotes.length)]
    }

    return {
      background,
      quote,
      toggle,
    }
  },
}
</script>
