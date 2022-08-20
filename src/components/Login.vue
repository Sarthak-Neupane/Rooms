<template>
  <section class="flex gap-8 justify-center items-center">
    <base-card class="bg-dark-secondary p-7">
      <form
        class="flex flex-col justify-center gap-7"
        @submit.prevent="formSubmit"
      >
        <div class="flex flex-col justify-center-items-start gap-5">
          <label
            for="email"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            class="text-dark-text bg-dark-primary h-10 w-full focus:outline-none p-2"
            v-model="email"
          />
        </div>
        <div class="flex flex-col justify-center-items-start gap-5">
          <label
            for="password"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            class="text-dark-text bg-dark-primary h-10 w-full focus:outline-none p-2"
            v-model="password"
          />
        </div>
        <footer class="flex justify-start items-center gap-5">
          <base-button color="bg-dark-primary"> Login </base-button>
          <p
            class="text-dark-text sm:text-xs lg:text-sm xl:text-md 2xl:text-lg"
          >
            Don't Have an Account?
            <router-link :to="{ name: 'SignUp' }">
              <span class="text-blue-400">SignUp</span>
            </router-link>
          </p>
        </footer>
      </form>
    </base-card>
    <p class="text-dark-text">OR</p>
    <button
      class="bg-slate-50 px-4 py-2 flex justify-evenly items-center gap-2"
    >
      <Google /> Login With Google
    </button>
  </section>
</template>

<script setup>
import BaseCard from "../Base/BaseCard.vue";
import BaseButton from "../Base/BaseButton.vue";

import Google from "../Icons/Igoogle.vue";

import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useAuthStore } from "../store/Auth";

const router = useRouter();
const store = useAuthStore();

const error = ref(false)
const errorMessage = ref()

const email = ref();
const password = ref();

async function formSubmit(){
  try {
    await store.login({
      email: email.value,
      password: password.value
    })
    const user = store.getUser
    if(user){
      console.log(user)
      router.replace({ name: "Rooms" });
    } 
  } catch (error) {
    error.value = true
    errorMessage.value = error.message
    console.log(errorMessage.value)
  }
};
</script>
