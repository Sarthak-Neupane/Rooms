<script setup>
import Card from "../Base/BaseCard.vue";
import BaseButton from "../Base/BaseButton.vue"
</script>

<template>
<router-link :to="{ name: 'Members' }">
  <card>
    <header>
      <h1 class="text-dark-text sm:my-7 lg:text-3xl md:text-2xl">THE SAT</h1>
    </header>
    <p class="text-dark-text sm:mb-8 lg:text-sm sm:text-xs">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    </p>
    <div class="flex justify-between items-center text-dark-text">
      <base-button color="bg-dark-secondary">SHARED</base-button>
      <base-button color="bg-dark-secondary">3 MEMBERS</base-button>
    </div>
  </card>
</router-link>
</template>
