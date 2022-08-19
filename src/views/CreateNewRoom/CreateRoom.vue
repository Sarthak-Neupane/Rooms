<template>
  <div
    class="h-screen bg-gray-700 opacity-50 w-screen grid place-items-center"
    @click="formClosed"
  ></div>
  <base-card class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6">
    <form class="flex flex-col justify-between gap-8" @submit.prevent="formSubmit()">
      <div class="flex justify-between flex-col gap-5">
        <label for="roomName" class="text-dark-text sm:text-md md:text-lg lg:text-xl 2xl:text-3xl">Room Name</label>
        <input type="text" name="roomName" id="roomName" class="bg-dark-secondary text-dark-text p-2 focus:outline-none " />
      </div>
      <div class="flex justify-between flex-col gap-5">
        <label for="roomDescription" class="text-dark-text sm:text-md md:text-lg lg:text-xl 2xl:text-3xl ">Room Description</label>
        <textarea
          name="roomDescription"
          id="roomDescription"
          cols="100"
          rows="7"
          class="bg-dark-secondary focus:outline-none p-2 text-dark-text resize-none"
        ></textarea>
      </div>
      <div class="flex justify-start gap-8 text-dark-text">
        <div class="flex gap-3">
            <label for="shared">Shared</label>
            <input type="radio" name="roomType" id="shared">
        </div>
        <div class="flex gap-3">
            <label for="private">Private</label>
            <input type="radio" name="roomType" id="private">
        </div>
      </div>
      <footer class="flex gap-14">
        <base-button color="bg-dark-secondary"> Save </base-button>
        <base-button color="bg-dark-secondary" @click="formClosed"> Close </base-button>
      </footer>
    </form>
  </base-card>
</template>

<script setup>
import BaseCard from "../../Base/BaseCard.vue";
import BaseButton from "../../Base/BaseButton.vue";

import { useRouter } from "vue-router";

const router = useRouter()

const formSubmit = ()=>{
    console.log('submitted')
}

const formClosed = ()=>{
    router.push({ name: 'Rooms' })
}

</script>
