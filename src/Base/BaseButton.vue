<template>
  <p class="py-2 px-4 text-xs text-dark-text" :class="color">
    <slot></slot>
  </p>
</template>

<script setup>
const props = defineProps(["color"]);
console.log(props);
</script>
