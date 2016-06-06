<style scoped lang='less'>
    .layer {
        border: 1px solid black;
        background-color: #eeff00;
        position: absolute;
        user-select: none;
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
    <cap-layer-container
        class='layer'
        :style='style'
        @click='click'
        @mousemove='drag'
        @mousedown='dragStart'
        @mouseup='dragEnd'>
        <div class='label'>
            lid: {{layer.lid}}
            <br>
            x: {{layer.measure.x}}
            y: {{layer.measure.y}}
            width: {{layer.measure.width}}
            height: {{layer.measure.height}}
            rotate: {{layer.measure.rotate.x}} {{layer.measure.rotate.y}} {{layer.measure.rotate.z}}
            scale: {{layer.measure.scale.x}} {{layer.measure.scale.y}}
        </div>
        <div class='origin-style' :style='originStyle'></div>
    </cap-layer-container>

</template>

<script>
import * as actions from '../../models/actions';
import { getLayer } from '../../models/getters';

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
    methods: {
        click () {
            this.setClid(this.lid);
        },
        drag () {
            if (!this.dragStartFlag) {
                return;
            }
            this.offset = {
                x: event.clientX - this.dragStartPos.x,
                y: event.clientY - this.dragStartPos.y
            }
            console.log(this.offset);
            this.x = this.domStartPosition.x + this.offset.x;
            this.y = this.domStartPosition.y + this.offset.y;
            console.log(this.x);
        },
        dragStart () {
            this.dragStartFlag = true;
            this.dragStartPos = {
                x: event.clientX,
                y: event.clientY
            };

            this.domStartPosition = {
                x: this.x,
                y: this.y
            };
        },
        dragEnd () {
            this.dragStartFlag = false;
        }
    }
}
</script>
