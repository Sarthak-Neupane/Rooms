<template>
  <section
    class="flex flex-col justify-center items-center min-h-screen bg-dark-primary gap-7"
  >
    <h1 class="text-dark-text">Just A Few Things More ...</h1>
    <base-card class="bg-dark-secondary p-7">
      <form class="flex flex-col justify-center items-start gap-7">
        <div class="flex flex-col justify-center-items-start gap-5 w-full">
          <label
            for="username"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            class="w-11/12 text-dark-text bg-dark-primary h-10 focus:outline-none p-2"
          />
        </div>
        <div class="flex flex-col justify-center-items-start gap-5 w-full">
          <label
            for="displayName"
            class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg"
          >
            Display Name
          </label>
          <input
            type="text"
            name="displayName"
            id="displayName"
            class="w-11/12 text-dark-text bg-dark-primary h-10 focus:outline-none p-2"
          />
        </div>

        <div class="flex justify-between items-center gap-3">
          <div class="flex flex-col w-2/4 gap-4">
            <h1 class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg">
              Display Picture
            </h1>
            <div class="flex flex-wrap">
              <label
                v-for="Avatar in Avatars"
                :for="Avatar.name"
                :key="Avatar.id"
              >
                <img
                  :src="Avatar.path"
                  :data-id="Avatar.id"
                  class="h-3/4"
                  :class="
                    selectedAvatar == Avatar.id
                      ? 'outline-4 outline outline-lime-400 rounded-full'
                      : ''
                  "
                  @click="AvatarClicked($event)"
                />
                <input
                  type="radio"
                  :name="Avatar.name"
                  :for="Avatar.name"
                  :id="Avatar.name"
                  class="hidden"
                />
              </label>
            </div>
          </div>
          <div class="flex flex-col w-2/4 gap-4">
            <h1 class="text-dark-text sm:text-xs lg:text-sm 2xl:text-lg">
              Display Theme
            </h1>
            <div class="flex flex-wrap">
              <label
                v-for="Theme in Themes"
                :for="Theme.name"
                :key="Theme.name"
              >
                <img
                  :src="Theme.path"
                  class="h-3/4"
                  :data-id="Theme.id"
                  :class="
                    selectedTheme == Theme.id
                      ? 'outline-4 outline outline-lime-400 rounded-full'
                      : ''
                  "
                  @click="themeClicked($event)"
                />
                <input
                  type="radio"
                  :name="Theme.name"
                  :for="Theme.name"
                  :id="Theme.name"
                  class="hidden"
                />
              </label>
            </div>
          </div>
        </div>
        <base-button color="bg-dark-primary"> Continue </base-button>
      </form>
    </base-card>
  </section>
</template>

<script setup>
import { ref } from "vue";
import BaseCard from "../Base/BaseCard.vue";
import BaseButton from "../Base/BaseButton.vue";

const selectedAvatar = ref(null);
const selectedTheme = ref(null);

const Avatars = ref([
  {
    id: 1,
    name: "Avatar1",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__5__z8tDyk1hM.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525032",
  },
  {
    id: 2,
    name: "Avatar2",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__3__L_enR1WRqP.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525087",
  },
  {
    id: 3,
    name: "Avatar3",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__2__j7hTXzevw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525186",
  },
  {
    id: 4,
    name: "Avatar4",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__4__P_Ov5lvO8M.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525136",
  },
  {
    id: 5,
    name: "Avatar5",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__1__L1z90XHvVy.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001525008",
  },
  {
    id: 6,
    name: "Avatar6",
    path: "https://ik.imagekit.io/8boruzan4f9/Avatars/Avatar__6__JXeVz8Mef.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661001524833",
  },
]);
const Themes = ref([
  {
    id: 1,
    name: "Theme1",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_18_QiOhI3_EYJ.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964343",
  },
  {
    id: 2,
    name: "Theme2",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_41_dY7cVK8mHw.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964344",
  },
  {
    id: 3,
    name: "Theme3",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_36_wGfeihWW7.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964381",
  },
  {
    id: 4,
    name: "Theme4",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_2_uwNtJ36sn.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964382",
  },
  {
    id: 5,
    name: "Theme5",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_28_EMCFT0uE4.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964322",
  },
  {
    id: 6,
    name: "Theme6",
    path: "https://ik.imagekit.io/8boruzan4f9/Theme/Rectangle_21_svixS6erGq.svg?ik-sdk-version=javascript-1.4.3&updatedAt=1661005964317",
  },
]);

const AvatarClicked = (e) => {
  selectedAvatar.value = e.target.dataset.id;
};
const themeClicked = (e) => {
  selectedTheme.value = e.target.dataset.id;
};
</script>
