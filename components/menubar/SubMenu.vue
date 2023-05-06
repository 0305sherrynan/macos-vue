<template>
    <div class="sub-menu">
        <div v-for="(item, index) in EachMenuItem" class="sub-each-item">
            <button class="sub-each-row-span" :disabled="item['disabled']">{{ item['title'] }}</button>
            <div v-if="item['breakAfter']" class="divider"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    EachMenuItem: Object
}>()
</script>

<style scoped lang="scss">
.sub-menu {
   
    --additional-box-shadow: 0 0 0 0 white;
    padding: .5rem;
    background-color: hsla(var(--system-color-light-hsl), 0.3);
    
    backdrop-filter: blur(25px);
    border-radius: 0.5rem;
    box-shadow: hsla(0, 0%, 0%, 0.3) 0px 0px 11px 0px, var(--additional-box-shadow);
    .sub-each-item {
        // text-align: left;

        padding: 0.2rem 0.4rem;
        margin: 0.1rem;
        min-width: 16rem;
        width: max-content;
    }

    .sub-each-row-span {
        display: flex;
            // flex-direction: column;
    justify-content: flex-start;
        position: relative;
        padding: 0.3rem;
        width: 100%;
        letter-spacing: 0.4px;
        --alpha: 1;
        font-weight: 400 !important;
        font-size: 0.9rem !important;
        border-radius: 0.3rem;
        transition: none;
        color: hsla(var(--system-color-dark-hsl), var(--alpha));

        &:disabled {
            --alpha: 0.5;
        }

        &:not(:disabled) {
            &:hover {
                background-color: var(--system-color-primary);
                color: var(--system-color-primary-contrast);
                font-weight: 500 !important;
            }
        }
    }

    .divider {
        
        width: 100%;
        height: 0.2px;
        background-color: hsla(var(--system-color-dark-hsl), 0.3);
    }
}
</style>