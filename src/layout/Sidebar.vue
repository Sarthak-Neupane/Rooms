<script setup>
import SidebarInner from './SidebarInner.vue'
import SidebarOuter from './SidebarOuter.vue'
const props = defineProps(["path"])
</script>

<template>
  <sidebar-outer v-if="path == '/'"></sidebar-outer>
  <sidebar-inner v-else></sidebar-inner>
</template>
