<template>
    <div class="flex flex-row">
        <v-icon class="relative top-1 left-2 mr-5" icon="mdi-headphones"></v-icon>
        <v-slider v-model="slider1" color="rgb(206, 207, 209) " elevation="10"> </v-slider>
    </div>
</template>

<script setup lang="ts">
const slider1 = ref<number>(0)
</script>

<style scoped></style>