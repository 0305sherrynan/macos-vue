<template>
    <div class="all-controls">
        <div class="top-controls">
            <div class="first-controls">
                <div class="single-contrl">
                    <ControlcentreWifiItem />
                    <div class="control-span">
                        <span>WiFi</span><br>
                        <span>on</span>
                    </div>
                </div>
                <div class="single-contrl">
                    <ControlcentreBluetoothItem />
                    <div class="control-span">
                        <span>Bluetooth</span><br>
                        <span>off</span>
                    </div>
                </div>
                <div class="single-contrl">
                    <ControlcentreFullscreenItem />
                    <div class="control-span">
                        <span>FullScreen</span><br>
                        <span>off</span>
                    </div>
                </div>
            </div>
            <div class="left-top-controls">
                <div class="single-contrl second-controls">
                    <ControlcentreDarkmodeItem />
                    <div class="control-span single-span">
                        <span>DarkMode</span>
                    </div>
                </div>
                <div class="single-contrl second-controls">
                    <ControlcentreEyeproItem />
                    <div class="control-span single-span">
                        <span>DarkMode</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <ControlcentreLightslider />
        </div>
    </div>
</template>

<script setup lang="ts">
const slider1 = ref<number>(0)
</script>

<style scoped lang="scss">
.all-controls{
    display: flex;
    flex-direction: column;
}
.top-controls {
    display: flex;
    flex-direction: row;
}

.first-controls {
    border-radius: .8em;
    background-color: hsla(0, 0%, 100%, .4);
    /* box-sizing: border-box; */
    border: 1px solid #e5e7eb;
}

.single-contrl {

    line-height: 1rem;
    display: flex;
    flex-direction: row;
    padding: .2rem;

    &:not(:nth-child(1)) {
        margin-top: .3rem;
    }

    .control-span {
        height: 2.5rem;
        font-size: 1rem;
        margin-left: .7rem;
    }
}

.second-controls {
    padding: 1rem;
    vertical-align: middle;
    border-radius: .8em;
    background-color: hsla(0, 0%, 100%, .4);
    /* box-sizing: border-box; */
    border: 1px solid #e5e7eb;
}

.single-span {
    display: inline-block;
    height: 2.5rem;
    font-size: 1rem;
    line-height: 2.5rem;
}</style>