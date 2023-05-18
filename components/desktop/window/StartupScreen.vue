<template>
    <Transition name="progress">
        <div class="screen-box" v-if="isShow">
            <img src="/img/apps/apple-white.png" alt="">
            <div class="progress-bar"></div>
        </div>
    </Transition>
</template>

<script setup lang="ts">
const progressBarWidth = ref<string>('1vw')
const isShow = ref<boolean>(true)
const animationTime = '4s'
onMounted(() => {
    progressBarWidth.value = '13vw'
    setTimeout(() => {
        isShow.value = false
    }, Number(animationTime.replace('s', '')) * 800)
})
</script>

<style scoped lang="scss">
.progress-enter-to{

}
.progress-enter-active ,
.progress-leave-active{
    transition: all 1s ease;
}
.progress-leave-to{
    opacity: 0;
}

.screen-box {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    img {
        width: 11vw;
        height: 11vw;
    }

    .progress-bar {
        margin-top: 3rem;
        width: 13vw;
        height: 0.3rem;
        border-radius: 1rem;
        background-color: rgb(66, 66, 66);

        &::before {

            position: absolute;
            width: v-bind(progressBarWidth);
            content: '';
            height: 0.3rem;
            border-radius: 1rem;
            background-color: rgb(245, 245, 245);
            transition: all v-bind(animationTime) ease;
        }
    }
}
</style>