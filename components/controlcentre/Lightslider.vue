<template>
    <div>
        <v-slider v-model="slider1" color="orange" label="color"> </v-slider>
    </div>
</template>

<script setup lang="ts">
const slider1 = ref<number>(0)
</script>

<style scoped></style>