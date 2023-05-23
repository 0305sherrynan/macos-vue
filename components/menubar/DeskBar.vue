<template>
    <div class="desk-bar">
        <div class="inline-block">
            <ul class="header-list-ul">
                <li v-for="(item, index) in headerMenuConfig">
                    <MenubarHeaderList :headlist="{ item, index }" />
                </li>
            </ul>
        </div>
        <MenubarRightBar class="desk-bar-right" />
    </div>
</template>

<script setup lang="ts">
import { headerMenuConfig } from '~/configs/menu/header.menu.config'

</script>

<style scoped lang="scss">
.desk-bar {
    z-index: 49;
    width: 100%;
    height: 1.8rem;
    background-color: hsla(var(--system-color-light-hsl), .3);
    // display: flex;
    // justify-content: space-around;
    // flex-direction: row;
    // align-items:center;


    .header-list-ul {
        height: 100%;
        display: flex;
        flex-direction: row;

        li {
            position: relative;

            color: var(--system-color-light);
            padding: 0.5rem;
            font-size: 13.5px;
            line-height: 13.5px;
            z-index: 2;



        }
    }

    .desk-bar-right {
        display: inline-block;
        position: absolute;
      
        top: .6rem;
        right: 14rem;
    }
}
</style>