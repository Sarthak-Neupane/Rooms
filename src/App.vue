<template>
  <div class="flex justify-between w-screen font-sans1">
    <sidebar :path="route.path" v-if="route.meta.showSidebar"> </sidebar>
    <div class="flex-1">
      <router-view></router-view>
    </div>
  </div>
</template>


<script setup>
    import Sidebar from "./layout/Sidebar.vue";
    import { useRouter, useRoute } from "vue-router";
    const router = useRouter()
    const route = useRoute()
</script>

