<template>
  <button class="py-2 px-4 text-xs text-dark-text" :class="color">
    <slot></slot>
  </button>
</template>

<script setup>
const props = defineProps(["color"]);
</script>
