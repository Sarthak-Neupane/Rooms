<template>
  <section class="h-screen bg-dark-secondary">
    <section class="mx-auto w-11/12 flex justify-between flex-col h-screen">
      <quick-action @btnClicked="btnClicked()"></quick-action>
      <div
        class="flex-1 flex flex-col justify-start sm:gap-10 md:gap-14 lg:gap-18 2xl:gap-24"
      >
        <RoomsContainer />
        <RoomsContainer />
      </div>
    </section>
  <div class="absolute top-0 left-0 z-10 h-screen">
    <router-view></router-view>
  </div>
  </section>
</template>

<script setup>
import QuickAction from "../layout/QuickAction.vue";
import RoomsContainer from "../layout/RoomsContainer.vue";

import { useRouter } from "vue-router";
    const router = useRouter()

    const btnClicked = () => {
        router.push({
            name: "CreateRoom"
        })
    };
</script>
