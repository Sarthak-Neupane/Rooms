<template>
  <div
    class="h-screen bg-gray-700 opacity-50 w-screen grid place-items-center"
    @click="formClosed"
  ></div>
  <base-card
    class="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 p-6"
  >
    <form
      class="flex flex-col justify-between gap-8"
      @submit.prevent="formSubmit()"
    >
      <div class="flex justify-between flex-col gap-5">
        <label
          for="roomName"
          class="text-dark-text sm:text-md md:text-lg lg:text-xl 2xl:text-3xl"
          >Room Name
          <p
            class="text-xs my-1"
            
          >
          <ul class=" flex justify-start gap-4">
            <li :class=" roomName && roomName.length <= 10 ? 'text-green-500' : 'text-red-500' "> Maximum 10 characters </li>
            <li :class=" roomName && roomName.length >= 1 ? 'text-green-500' : 'text-red-500' "> Minimum 1 character </li>
            <li :class=" roomNameCorrect === true ? 'text-green-500' : 'text-red-500' "> Count : {{ nameCount }} </li>
          </ul>
          </p>
        </label>
        <input
          type="text"
          name="roomName"
          id="roomName"
          class="bg-dark-secondary text-dark-text p-2 focus:outline-none"
          v-model.trim="roomName"
          @input="checkName"
        />
      </div>
      <div class="flex justify-between flex-col gap-5">
        <label
          for="roomDescription"
          class="text-dark-text sm:text-md md:text-lg lg:text-xl 2xl:text-3xl"
          >Room Description
          <p
            class="text-xs my-1"
            
          >
          <ul class=" flex justify-start gap-4">
            <li :class=" roomDesc && roomDesc.length <= 100 ? 'text-green-500' : 'text-red-500' "> Maximum 100 characters </li>
            <li :class=" roomDesc && roomDesc.length >= 1 ? 'text-green-500' : 'text-red-500' "> Minimum 1 character </li>
            <li :class=" roomDescCorrect === true ? 'text-green-500' : 'text-red-500' "> Count : {{ descriptionCount }} </li>
          </ul>
          </p></label
        >

        <textarea
          name="roomDescription"
          id="roomDescription"
          cols="100"
          rows="7"
          class="bg-dark-secondary focus:outline-none p-2 text-dark-text resize-none"
          v-model.trim="roomDesc"
          @input="checkDecription"
        ></textarea>
      </div>
      <div class="flex justify-start items-center gap-8 text-dark-text">
        <div class="flex gap-3">
          <label for="shared">Shared</label>
          <input
            type="radio"
            name="roomType"
            id="shared"
            value="shared"
            v-model="roomType"
            @input="checkType"
          />
        </div>
        <div class="flex gap-3">
          <label for="private">Private</label>
          <input
            type="radio"
            name="roomType"
            id="private"
            value="private"
            v-model="roomType"
            @input="checkType"
          />
        </div>
        <p class="text-xs" :class=" roomTypeCorrect === true ? 'text-green-500' : 'text-red-500' " > Pick the room type. </p>
      </div>
      <footer class="flex gap-14">
        <base-button color="bg-dark-secondary"> Save </base-button>
        <base-button color="bg-dark-secondary" @click="formClosed">
          Close
        </base-button>
      </footer>
    </form>
  </base-card>
</template>

<script setup>
import BaseCard from "../../Base/BaseCard.vue";
import BaseButton from "../../Base/BaseButton.vue";

import { useRouter } from "vue-router";
import { ref } from "vue";
import { useRoomStore } from "../../store/Rooms";

const router = useRouter();
const roomStore = useRoomStore()

const roomName = ref();
const roomDesc = ref();
const roomType = ref();

const roomNameCorrect = ref(false);
const roomDescCorrect = ref(false);
const roomTypeCorrect = ref(false)

const descriptionCount = ref(0);
const nameCount = ref(0);

const error = ref();
const errorMessage = ref();

const checkName = () => {
  console.log('checking room name')
  if (roomName.value) {
    nameCount.value = roomName.value.length;

    if (roomName.value.length >= 3 && roomName.value.length <= 10) {
      error.value = false;
      errorMessage.value = "";
      roomNameCorrect.value = true;
      return true;
    } else {
      error.value = true;
      errorMessage.value = "Room name must be atleast 3 letters";
      roomNameCorrect.value = false;
      return false;
    }
  } else {
    error.value = true;
    errorMessage.value = "Room name Cannot be empty";
    return false;
  }
};

const checkDecription = () => {
  console.log('checking room description')
  if (roomDesc.value) {
    descriptionCount.value = roomDesc.value.length;
    if (roomDesc.value.length <= 100 && roomDesc.value.length >= 1) {
      error.value = false;
      errorMessage.value = "";
      roomDescCorrect.value = true;
      return true;
    } else {
      error.value = true;
      errorMessage.value = "Room Description must be between 100 and 1 characters";
      roomDescCorrect.value = false;
      return false;
    }
  } else {
    error.value = true;
    errorMessage.value = "Room Description must be between 100 and 1 characters";
    roomDescCorrect.value = false
    return false;
  }
};

const checkType = () => {
  console.log('checking room type')
  if (roomType.value) {
    error.value = false;
    errorMessage.value = "";
    roomTypeCorrect.value = true;
    return true
  } else {
    error.value = true;
    errorMessage.value = "You must pick atleat one room type";
    roomTypeCorrect.value = false
    return false;
  }
};

const validation = () => {
  console.log('validating')
  if(checkName() && checkDecription() && checkType()){
    return true
  } else {
    return false
  }
};

const formSubmit = async () => {
  if(validation()){
    console.log(roomName.value)
    console.log(roomDesc.value)
    console.log(roomType.value)

    try {      
      await roomStore.addRoomTodb({
        name: roomName.value,
        description: roomDesc.value,
        type: roomType.value
      })
      formClosed()
    } catch (error) {
      console.log(error)
      errorMessage.value = error.message
      console.log(errorMessage.value)
    }
  } else {
    console.log(errorMessage.value)
  }
};

const formClosed = () => {
  router.push({ name: "Rooms" });
};
</script>
