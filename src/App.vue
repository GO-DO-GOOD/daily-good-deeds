<template>
  <div :class="background" class="h-full text-white">
    <div class="flex flex-col flex-initial">
      <div class="flex justify-center">
        <div class="p-4 m-2">
          <img src="/logo-letter.png" class="h-56" />
        </div>
      </div>

      <div
        class="flex flex-col justify-center justify-self-stretch items-center text-center text-6xl font-bold"
      >
        <div class="p-24 my-2 mx-24">
          VERSUCHE WENIGER PLASTIK ZU KONSUMIEREN UND SUCHE NACH PASSENDEN WEGEN,
          DIE ZU DIR PASSEN.
        </div>

        <div class="pb-16 mb-16">
          <Icon icon="mdi:arrow-down-bold-circle" @click="toggle()" />
        </div>
      </div>

      <footer class="flex flex-col justify-center text-center items-center">
        <div class="">
          DEINE TÄGLICHE GUTE TAT FÜR THE GOOD CHALLENGE IM NOVEMBE 2020
        </div>
        <div class="flex flex-row text-3xl">
          <a href="https://www.facebook.com/GoDoGood2020/" target="_blank">
            <Icon class="m-4" icon="mdi:facebook" />
          </a>
          <a href="hhttps://www.instagram.com/godogood2020/" target="_blank">
            <Icon class="m-4" icon="mdi:instagram" />
          </a>
          <a href="mailto:godo.good?subject=Hab%20eine%20Idee">
            <Icon class="m-4" icon="mdi:email" />
          </a>
        </div>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'

export default {
  setup() {
    const background = ref(`bg-circle-${Math.floor(Math.random() * 16) + 1}`)

    function toggle() {
      background.value = `bg-circle-${Math.floor(Math.random() * 16) + 1}`
    }

    return {
      background,
      toggle,
    }
  },
}
</script>
