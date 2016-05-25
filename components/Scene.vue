<style scoped lang='less'>
cap-scene {
    position: relative;
    width: 600px;
    height: 400px;
    transform-origin: 50% 50% 0;
    z-index: 1;
    background-color: #fff;
    border: 1px solid #ccc;
    box-shadow: 3px 3px 0 #ccc;
}
</style>

<template>
    <cap-scene class='outer'>
        {{counter}}
    </cap-scene>
</template>

<script>
import { getCount } from '../models/getters'

export default {
    vuex: {
        getters: {
            counter: getCount
        }
    }
}
</script>
