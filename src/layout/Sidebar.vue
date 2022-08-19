<script setup>
import SidebarInner from './SidebarInner.vue'
import SidebarOuter from './SidebarOuter.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router';

const props = defineProps(["path"])
const route = useRoute();

const currentRoute = computed(() => {
  if(route.name === "Rooms" || route.name === "Profile" || route.name === "Friends")
  {
    return true
  }
  else{
    return false
  }
})

</script>

<template>
  <sidebar-outer v-if="currentRoute"></sidebar-outer>
  <sidebar-inner v-else></sidebar-inner>
</template>
