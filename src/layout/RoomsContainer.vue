<template>
    <div class="flex justify-between items-start flex-col w-full">
        <RoomHeadline />
        <div class="flex gap-10">
            <RoomCard />
            <RoomCard />
        </div>
    </div>

</template>
<script setup>
import RoomHeadline from '../components/RoomHeadline.vue'
import RoomCard from '../components/RoomCard.vue'
</script>