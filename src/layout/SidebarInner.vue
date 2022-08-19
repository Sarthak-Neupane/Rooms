<template>
  <aside
    class="h-screen w-1/5 bg-dark-primary py-3 flex justify-between flex-col sticky top-0"
  >
    <div>
      <p
        class="text-dark-text mb-9 py-2 sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg"
      >
        <router-link :to="{ name: 'Rooms' }"> Back </router-link>
      </p>
    </div>
    <div
      class="flex justify-between items-center gap-8 flex-col sm:pl-5 lg:pl-7 xl:pl-10 2xl:pl-14"
    >
      <h1
        class="text-dark-text w-full sm:text-lg md:text-xl lg:text-3xl 2xl:text-5xl"
      >
        THE SAT
      </h1>
      <p
        class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg sm:pr-5 lg:pr-7 xl:pr-10 2xl:pr-14"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum omnis
        commodi, excepturi modi perferendis deleniti.
      </p>
    </div>
    <div class="flex-auto mt-10">
      <ul>

        <router-link v-for="data in roomData" :key="data" :to="{ name: data }">
          <li
            class="text-dark-text w-full sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg py-3 hover:bg-dark-secondary"
            :class=" currentRoute === data ? 'bg-dark-secondary' : 'bg-dark-primary' "
          >
            {{ data }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="">
      <p
        class="text-dark-text sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg py-3"
      >
        Leave Group
      </p>
    </div>
  </aside>
</template>


<script setup>
import { computed, ref } from 'vue';
import { useRoute } from 'vue-router'
const route = useRoute()


const roomData = ref(["Members", "Chat", "Reminders", "Files"])

const currentRoute = computed(()=>{
  return route.name
})


</script>