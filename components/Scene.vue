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
        curLayerX: {
            get () {
                let layers = this.layers;
                return layers[this.clid].measure.position.x;
            },
            set (value) {
                this.set('measure', 'position', 'x', value);
            }
        },
        curLayerY: {
            get () {
                let layers = this.layers;
                return layers[this.clid].measure.position.y;
            },
            set (value) {
                this.set('measure', 'position', 'y', value);
            }
        },
        curLayerOrigin: {
            get () {
                let layers = this.layers;
                return layers[this.clid].measure.origin;
            }
        }
    },
    vuex: {
        getters: {
            layers: (state) => state.layers,
            clid: (state) => state.clid,
        },
        actions: {
            setClid: actions.setClid,
            set: actions.set
        }
    },
    methods: {
        /**
         * 处理拖动事件
         */
        drag () {
            if (!this.dragStartFlag) {
                return;
            }
            switch (this.draggableType) {
                case 'layer':
                    this.offset = {
                        x: event.clientX - this.dragStartPos.x,
                        y: event.clientY - this.dragStartPos.y
                    }
                    this.curLayerX = this.domStartPosition.x + this.offset.x;
                    this.curLayerY = this.domStartPosition.y + this.offset.y;
                    break;
                case 'anchor':
                    this.offset = {
                        x: event.clientX - this.dragStartPos.x,
                        y: event.clientY - this.dragStartPos.y
                    }
                    break;
                default:
                    break;
            }
        },
        /**
         * 按下时根据点击区域定义初始值
         */
        dragStart () {
            this.draggableType = event.target.dataset.draggable;
            let clid;
            switch (this.draggableType) {
                case 'layer':
                    clid = event.target.dataset.lid;
                    clid && this.setClid(clid);

                    this.dragStartFlag = true;
                    this.dragStartPos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    this.domStartPosition = {
                        x: this.curLayerX,
                        y: this.curLayerY
                    };
                    break;
                case 'anchor':
                    clid = this.clid;

                    console.log(this.curLayerOrigin);

                    this.dragStartFlag = true;
                    this.dragStartPos = {
                        x: event.clientX,
                        y: event.clientY
                    };

                    this.domStartPosition = {
                        x: this.curLayerX,
                        y: this.curLayerY
                    };
                    break
                default:
                    break;
            }
        },
        /**
         * 拖动事件结束后处理
         */
        dragEnd () {
            this.draggableType = null;
            this.dragStartFlag = false;
            this.dragStartPos = {};
            this.domStartPosition = {};

            // switch (this.draggableType) {
            //     case 'layer':
            //         this.dragStartFlag = false;
            //         this.dragStartPos = {};
            //         this.domStartPosition = {};
            //         break;
            //     case 'anchor':
            //         this.dragStartFlag = false;
            //         this.dragStartPos = {};
            //         this.domStartPosition = {};
            //         break;
            //     default:
            //         break;
            // }
        }
    }
};
</script>
