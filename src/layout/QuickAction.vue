<template>
    <div class="flex justify-end py-5">
        <base-button color="bg-dark-primary" @click="$emit('btnClicked')"> Create A Room </base-button>
    </div>
</template>

<script setup>
    import BaseButton from '../Base/BaseButton.vue'
</script>