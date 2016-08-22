<style scoped lang="less">
</style>

<template>
<div class='cap-inspector-panel measure' data-inspector-type='measure'>
    <header class='cap-inspector-panel-header cap-border-bottom'>
        <h3 class='cap-inspector-panel-header-title'>布局</h3>
    </header>
    <div class='cap-inspector-panel-inner'>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>位置</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='左'
                        :value.sync='x'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0},{title: "px1", value: 1}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='上'
                        :value.sync='y'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>尺寸</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='width'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='高度'
                        :value.sync='height'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}]'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>限制比例</label>
                    <input type='checkbox'>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>缩放</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='宽度'
                        :value.sync='scaleX'
                        type='number'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='高度'
                        :value.sync='scaleY'
                        type='number'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>限制比例</label>
                    <input type='checkbox'>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>旋转</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='x轴'
                        :value.sync='rotateX'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='y轴'
                        :value.sync='rotateY'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='z轴'
                        :value.sync='rotateZ'
                        type='number'
                        :options-readonly=true
                        :options-value=2
                        :options='[{title: "°", value: 2}]'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>拉伸</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='水平'
                        :value.sync='skewX'
                        type='number'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item'>
                    <cap-input
                        title='垂直'
                        :value.sync='skewY'
                        type='number'
                    ></cap-input>
                </div>
            </div>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item'>
                    <label>限制比例</label>
                    <input type='checkbox'>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>视点</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='视点'
                        :value.sync='perspective'
                        type='number'
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class='cap-inspector-panel-section cap-border-bottom'>
            <header>
                <h4>原点</h4>
            </header>
            <div class='cap-inspector-panel-row'>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='x偏移量'
                        :value.sync='originX'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}, {title: "%", value: 1}]'
                    ></cap-input>
                </div>
                <div class='cap-inspector-panel-item cap-inspector-panel-row'>
                    <cap-input
                        title='x偏移量'
                        :value.sync='originY'
                        type='number'
                        :options-readonly=true
                        :options-value=0
                        :options='[{title: "px", value: 0}, {title: "%", value: 1}]'
                    ></cap-input>
                </div>
            </div>
        </section>
    </div>
</div>

</template>

<script>
import CapInput from '../common/Input.vue';
import * as actions from '../../models/actions';
import { get } from '../../models/getters';

export default {
    props: ['inspector'],
    components: {
        CapInput
    },
    computed: {
        x: {
            get () {
                return this.get('measure', 'position', 'x');
            },
            set (value) {
                this.set('measure', 'position', 'x', value);
            }
        },
        y: {
            get () {
                return this.get('measure', 'position', 'y');
            },
            set (value) {
                this.set('measure', 'position', 'y', value);
            }
        },
        width: {
            get () {
                return this.get('measure', 'size', 'width');
            },
            set (value) {
                this.set('measure', 'size', 'width', value);
            }
        },
        height: {
            get () {
                return this.get('measure', 'size', 'height');
            },
            set (value) {
                this.set('measure', 'size', 'height', value);
            }
        },
        scaleX: {
            get () {
                return this.get('measure', 'scale', 'x');
            },
            set (value) {
                this.set('measure', 'scale', 'x', value);
            }
        },
        scaleY: {
            get () {
                return this.get('measure', 'scale', 'y');
            },
            set (value) {
                this.set('measure', 'scale', 'y', value);
            }
        },
        rotateX: {
            get () {
                return this.get('measure', 'rotate', 'x');
            },
            set (value) {
                this.set('measure', 'rotate', 'x', value);
            }
        },
        rotateY: {
            get () {
                return this.get('measure', 'rotate', 'y');
            },
            set (value) {
                this.set('measure', 'rotate', 'y', value);
            }
        },
        rotateZ: {
            get () {
                return this.get('measure', 'rotate', 'z');
            },
            set (value) {
                this.set('measure', 'rotate', 'z', value);
            }
        },
        skewX: {
            get () {
                return this.get('measure', 'skew', 'x');
            },
            set (value) {
                this.set('measure', 'skew', 'x', value);
            }
        },
        skewY: {
            get () {
                return this.get('measure', 'skew', 'y');
            },
            set (value) {
                this.set('measure', 'skew', 'y', value);
            }
        },
        perspective: {
            get () {
                return this.get('measure', 'transform', 'perspective');
            },
            set (value) {
                this.set('measure', 'transform', 'perspective', value);
            }
        },
        originX: {
            get () {
                return this.get('measure', 'origin', 'x');
            },
            set (value) {
                this.set('measure', 'origin', 'x', value);
            }
        },
        originY: {
            get () {
                return this.get('measure', 'origin', 'y');
            },
            set (value) {
                this.set('measure', 'origin', 'y', value);
            }
        }
    },
    vuex: {
        getters: {
            get: state => get(state)
        },
        actions: {
            set: actions.set
        }
    }
};
</script>
