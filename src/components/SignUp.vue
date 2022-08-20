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
            @keydown="checkEmail"
          />
        </div>
        <div class="flex flex-col justify-center-items-start gap-5">
          <label
            for="password"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Password
            <p
              class="text-xs"
              :class="
                passwordCorrect === true ? 'text-green-500' : 'text-red-500'
              "
            >
              [ 6-20 characters, one numeric digit, one UpperCase, one LowerCase
              ]
            </p>
          </label>
          <input
            type="text"
            id="password"
            name="password"
            class="text-dark-text bg-dark-primary h-10 w-full focus:outline-none p-2"
            v-model="password"
            @input="checkPassword"
          />
        </div>
        <div class="flex flex-col justify-center-items-start gap-5">
          <label
            for="password"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Confirm Password
          </label>
          <input
            type="text"
            id="password"
            name="password"
            class="text-dark-text bg-dark-primary h-10 w-full focus:outline-none p-2"
            v-model="confirmPassword"
          />
        </div>
        <footer class="flex justify-start items-center gap-5">
          <base-button color="bg-dark-primary"> SignUp </base-button>
          <p class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg">
            Already Have an Account?
            <router-link :to="{ name: 'Login' }">
              <span class="text-blue-400">Login</span>
            </router-link>
          </p>
        </footer>
      </form>
    </base-card>
    <p class="text-dark-text">OR</p>
    <button
      class="bg-slate-50 px-4 py-2 flex justify-evenly items-center gap-2 sm:text-xs md:text-md 2xl:text-lg"
    >
      <Google /> SignUp With Google
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

const email = ref();
const password = ref();
const confirmPassword = ref();
const passwordCorrect = ref(false);
const emailCorrect = ref(true);

const error = ref(false);
const errorCode = ref();
const errorMessage = ref();

const route = useRoute();
const router = useRouter();
const store = useAuthStore();

const checkEmail = () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    emailCorrect.value = true;
    return true;
  } else {
    emailCorrect.value = false;
    return false;
  }
};

const checkPassword = () => {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password.value)) {
    passwordCorrect.value = true;
    return true;
  } else {
    passwordCorrect.value = false;
    return false;
  }
};

const checkConfirmPassword = () => {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
};

const validation = () => {
  if (checkEmail() && emailCorrect.value) {
    if (checkPassword() && passwordCorrect.value) {
      if (checkConfirmPassword()) {
        return true;
      } else {
        console.log("password and confirm password do not match");
      }
    } else {
      console.log("invalid Password");
      return false;
    }
  } else {
    console.log("invalid Email");
    return false;
  }
};

async function formSubmit() {
  if (validation()) {
    try {
      await store.signup({
        email: email.value,
        password: password.value,
      });
      const user = store.getUser;
      if (user) {
        console.log(user);
        router.replace({ name: "Credentials" });
      }
    } catch (error) {
      error.value = true;
      errorMessage.value = error.message;
    }

  }
}
</script>
