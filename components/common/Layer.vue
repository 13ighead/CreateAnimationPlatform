<style scoped lang='less'>
    .layer {
        border: 1px solid black;
        background-color: #eeff00;
        position: absolute;
    }
    .origin-style {
        position: absolute;
        width: 4px;
        height: 4px;
        background-color: #f00;
        transform: translateX(-50%) translateY(-50%);;
    }
    .label {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 110%;
        top: 0;
        pointer-events: none;
    }
</style>

<template>
    <div class='layer' :style='style' @click='click'>
        <div class='label'>
            x: {{layer.measure.x}}
            y: {{layer.measure.y}}
            width: {{layer.measure.width}}
            height: {{layer.measure.height}}
            rotate: {{layer.measure.rotate.x}} {{layer.measure.rotate.y}} {{layer.measure.rotate.z}}
            scale: {{layer.measure.scale.x}} {{layer.measure.scale.y}}
        </div>
        <div class='origin-style' :style='originStyle'></div>
    </div>

</template>

<script>
import { setClid } from '../../models/actions';
export default {
    name: 'CapLayer',
    ready () {

    },
    props: ['layer'],
    computed: {
        style () {
            return {
                width: `${this.layer.measure.width}px`,
                height: `${this.layer.measure.height}px`,
                transformOrigin: `${this.layer.measure.origin.x}px ${this.layer.measure.origin.y}px`,
                transform: `translateX(${this.layer.measure.x}px)
                            translateY(${this.layer.measure.y}px)
                            rotateX(${this.layer.measure.rotate.x}deg)
                            rotateY(${this.layer.measure.rotate.y}deg)
                            rotateZ(${this.layer.measure.rotate.z}deg)
                            scaleX(${this.layer.measure.scale.x})
                            scaleY(${this.layer.measure.scale.y})`

            }
        },
        originStyle () {
            return {
                left: `${this.layer.measure.origin.x}px`,
                top: `${this.layer.measure.origin.y}px`
            }
        },
        lid: {
            get () {
                return this.layer.lid;
            }
        }
    },
    vuex: {
        actions: {
            setClid
        }
    },
    methods: {
        click () {
            this.setClid(this.lid);
        }
    }
}
</script>
