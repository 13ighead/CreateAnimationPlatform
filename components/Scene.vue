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
    perspective: 400px
}
</style>

<template>
    <cap-scene class='outer'>
        <cap-layer
            :state="state"
        ></cap-layer>
    </cap-scene>
</template>

<script>
import CapLayer from './common/Layer.vue'
import getState from '../models/getters'
export default {
    components: {
        CapLayer
    },
    vuex: {
        getters: {
            state: state => state
        }
    }
};
</script>
