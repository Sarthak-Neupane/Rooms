<template>
  <aside
    class="h-screen w-1/5 bg-dark-primary py-3 flex justify-between flex-col sticky top-0"
  >
    <div>
      <p
        class="text-dark-primary mb-9 py-2 sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg pointer-events-none select-none"
      >
        Back
      </p>
    </div>
    <div class="flex justify-between items-center flex-col">
      <img src="../assets/Avatar.svg" class="w-32 xl:w-40 2xl:w-48" />
      <h1 class="text-dark-text py-2 sm:text-sm 2xl:text-lg">
        {{ store.user.displayName }}
      </h1>
    </div>
    <div class="flex-auto mt-10">
      <ul>
        <router-link v-for="data in roomData" :key="data" :to="{ name: data }">
          <li
            class="text-dark-text w-full sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg py-3 hover:bg-dark-secondary"
            :class="
              currentRoute === data ? 'bg-dark-secondary' : 'bg-dark-primary'
            "
          >
            {{ data }}
          </li>
        </router-link>
      </ul>
    </div>
    <div class="">
      <p
        class="text-dark-text sm:pl-5 sm:text-sm lg:pl-7 2xl:pl-14 2xl:text-lg py-3"
        @click="performSignOut()"
      >
        Sign Out
      </p>
    </div>
  </aside>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../store/Auth";

const route = useRoute();
const router = useRouter();
const store = useAuthStore();

const roomData = ref(["Rooms", "Profile", "Friends"]);

const error = ref(false);
const errorCode = ref();
const errorMessage = ref();

const currentRoute = computed(() => {
  return route.name;
});

async function performSignOut() {
  try {
    await store.signingOut();
    localStorage.clear();
    store.$reset();
    router.replace({ name: "Login" });
  } catch (error) {
    error.value = true;
    errorMessage.value = error.message;
    console.log(errorMessage.value);
  }
}
</script>
