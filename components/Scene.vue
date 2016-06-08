<style scoped lang='less'>
.cap-scene {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
    height: 100%;
    width: 100%;
}
.cap-scene-container {
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
    <div class='cap-scene'
        @mousemove='drag'
        @mousedown='dragStart'
        @mouseup='dragEnd'
        >
        <div class="cap-scene-container">
            <cap-layer v-for="layer in layers"
                :layer="layer"
            ></cap-layer>
        </div>
    </div>

</template>

<script>
import CapLayer from './common/Layer.vue';
import * as actions from '../models/actions';
import { getLayer } from '../models/getters';

export default {
    components: {
        CapLayer
    },
    computed: {
        x: {
            get () {
                let layers = this.layers;
                return layers[this.clid].measure.x;
            },
            set (value) {
                this.setMeasureX(value);
            }
        },
        y: {
            get () {
                let layers = this.layers;
                return layers[this.clid].measure.y;
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
        drag () {
            switch (this.draggableType) {
                case 'layer':
                    if (!this.dragStartFlag) {
                        return;
                    }
                    this.offset = {
                        x: event.clientX - this.dragStartPos.x,
                        y: event.clientY - this.dragStartPos.y
                    }
                    this.x = this.domStartPosition.x + this.offset.x;
                    this.y = this.domStartPosition.y + this.offset.y;
                    break;
                default:
                    break;
            }
        },
        dragStart () {
            this.draggableType = event.target.dataset.draggable;
            switch (this.draggableType) {
                case 'layer':
                    let clid = event.target.dataset.lid;
                    clid && this.setClid(clid);

                    this.dragStartFlag = true;
                    this.dragStartPos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    this.domStartPosition = {
                        x: this.x,
                        y: this.y
                    };
                    break;
                default:
                    break;
            }
        },
        dragEnd () {
            switch (this.draggableType) {
                case 'layer':
                    this.dragStartFlag = false;
                    break;
                default:
                    break;
            }
        }
    }
};
</script>
