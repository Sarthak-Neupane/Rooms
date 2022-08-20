<template>
  <section class="h-screen flex flex-col justify-center items-center gap-20 bg-dark-primary">
    <div class="flex flex-col justify-center items-center gap-7">
        <h1 class="font-semibold text-dark-text sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl">Welcome To <span class=" font-extrabold sm:text-6xl md:text-7xl lg:text-8xl 2xl:text-9xl">Rooms</span></h1>
        <p class="font-regular text-dark-text sm:text-md md:text-lg lg:text-xl 2xl:text-3xl">A lightweight project management tool</p>
    </div>
    <router-view></router-view>
  </section>
</template>

<script setup>
</script>
