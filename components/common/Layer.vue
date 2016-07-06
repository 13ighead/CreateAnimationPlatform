<style scoped lang='less'>
    .cap-layer {
        border: 1px solid black;
        background-color: #eeff00;
        position: absolute;
        user-select: none;
        cursor: default;
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
    .static {
        pointer-events: none;
    }
</style>

<template>
    <div class='cap-layer'
        data-draggable="layer"
        :style='style'
        :data-lid="lid">
        <div class='label'>
            lid: {{lid}}
            <br>
            x: {{layer.measure.x}}
            y: {{layer.measure.y}}
            width: {{layer.measure.width}}
            height: {{layer.measure.height}}
            rotate: {{layer.measure.rotate.x}} {{layer.measure.rotate.y}} {{layer.measure.rotate.z}}
            scale: {{layer.measure.scale.x}} {{layer.measure.scale.y}}
        </div>
        <cap-control-layer v-show="lid == this.clid"></cap-control-layer>
        <div class='origin-style' :style='originStyle'></div>
    </div>

</template>

<script>
import CapControlLayer from './ControlLayer.vue';
import * as actions from '../../models/actions';
import { getLayer } from '../../models/getters';

export default {
    name: 'CapLayer',
    ready () {

    },
    props: ['layer'],
    components: {
        CapControlLayer
    },
    computed: {
        style () {
            return {
                width: `${this.layer.measure.width}px`,
                height: `${this.layer.measure.height}px`,
                transformOrigin: `${this.layer.measure.origin.x}px ${this.layer.measure.origin.y}px`,
                transform: `translateX(${this.x}px)
                            translateY(${this.y}px)
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
        },
        x: {
            get () {
                let layers = this.layers;
                return layers[this.lid].measure.x;
            },
            set (value) {
                this.setMeasureX(value);
            }
        },
        y: {
            get () {
                let layers = this.layers;
                return layers[this.lid].measure.y;
            },
            set (value) {
                this.setMeasureY(value);
            }
        }
    },
    vuex: {
        getters: {
            layers: (state) => state.layers,
            clid: (state) => state.clid
        },
        actions: {
            setClid: actions.setClid,
            setMeasureX: actions.setMeasureX,
            setMeasureY: actions.setMeasureY
        },
        computed: {

        }
    },
    data () {
        return {
            lid: this.lid
        }
    }
}
</script>
