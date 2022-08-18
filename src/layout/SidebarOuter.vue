<template>
  <aside
    class="h-screen w-1/5 bg-dark-primary py-3 flex justify-between flex-col sticky top-0"
  >
    <div>
      <p
        class="text-dark-text mb-9 py-2 sm:pl-5 sm:text-sm lg:pl-7 xl:pl-10 2xl:pl-14 2xl:text-lg"
      >
        Back
      </p>
    </div>
    <div class="flex justify-between items-center flex-col">
      <img src="../assets/Avatar.svg" class="w-32 xl:w-40 2xl:w-48" />
      <h1 class="text-dark-text py-2 sm:text-sm 2xl:text-lg">
        SARTHAK NEUPANE
      </h1>
    </div>
    <div class="flex-auto mt-10">
      <ul>
        <router-link to="/"
          ><li
            class="text-dark-text w-full sm:pl-5 sm:text-sm lg:pl-7 2xl:pl-14 2xl:text-lg py-3 bg-dark-secondary hover:bg-dark-secondary"
          >
            Rooms
          </li></router-link
        >
        <router-link to="/profile">
          <li
            class="text-dark-text w-full sm:pl-5 sm:text-sm lg:pl-7 2xl:pl-14 2xl:text-lg py-3 bg-dark-primary hover:bg-dark-secondary"
          >
            Profile
          </li>
        </router-link>
        <router-link to="/friends">
          <li
            class="text-dark-text w-full sm:pl-5 sm:text-sm lg:pl-7 2xl:pl-14 2xl:text-lg py-3 bg-dark-primary hover:bg-dark-secondary"
          >
            Friends
          </li>
        </router-link>
      </ul>
    </div>
    <div class="">
      <p
        class="text-dark-text sm:pl-5 sm:text-sm lg:pl-7 2xl:pl-14 2xl:text-lg py-3"
      >
        Settings
      </p>
    </div>
  </aside>
</template>
