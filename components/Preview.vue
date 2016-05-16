<style scoped lang='less'>
cap-preview {
    display: flex;
    width: 100%;
    height: 100%;

    .cap-scene-container {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: space-around;
        z-index: 1;
    }

    .cap-inspector-container {
        flex: 0 0 300px;
        z-index: 2;
        height: 100%;
    }
}

</style>

<template>
    <cap-preview>
        <div class="cap-scene-container">
            <scene></scene>
        </div>
        <div class="cap-inspector-container">
            <inspector></inspector>
        </div>
    </cap-preview>
</template>

<script>
import Scene from './Scene.vue';
import Inspector from './Inspector.vue';

export default {
    components: {
        Scene,
        Inspector
    }
};
</script>
