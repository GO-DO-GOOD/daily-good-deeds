<template>
  <div class="text-xl mt-6">
    <div class="icon-btn mx-2" @click="isDark = !isDark">
      <Icon :icon="isDark ? 'carbon:moon' : 'carbon:sun'" class="inline-block" />
    </div>

    <div class="icon-btn mx-2" @click="toggleLocales">
      <Icon icon="carbon:language" class="inline-block" />
    </div>

    <a class="icon-btn mx-2" href="https://github.com/antfu/vitesse" target="_blank">
      <Icon icon="carbon:code" class="inline-block" />
    </a>
  </div>
</template>

<script setup lang='ts'>
export { isDark } from '/~/utils'
</script>
