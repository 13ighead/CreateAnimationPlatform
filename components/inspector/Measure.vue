<style scoped lang='less'>
</style>

<template>
<div class="cap-inspector-panel measure" data-inspector-type="measure">
    <header class="cap-inspector-panel-header cap-border-bottom">
        <h3 class="cap-inspector-panel-header-title">布局</h3>
    </header>
    <div class="cap-inspector-panel-inner">
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>位置</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="左"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="上"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>尺寸</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="宽度"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="高度"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
            </div>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <label>限制比例</label>
                    <input type="checkbox">
                </div>
            </div>
        </section>
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>缩放</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="宽度"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="高度"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
            </div>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <label>限制比例</label>
                    <input type="checkbox">
                </div>
            </div>
        </section>
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>旋转</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="x轴"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="y轴"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
                <div class="cap-inspector-panel-item">
                    <cap-input
                        title="z轴"
                        value="0"
                        type="number"
                    ></cap-input>
                </div>
            </div>
        </section>
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>原点</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item cap-inspector-panel-row">
                    <label>x偏移量</label>
                    <input type="number" value=50>
                    <select name="" id="">
                        <option value="">%</option>
                        <option value="">px</option>
                    </select>
                </div>
                <div class="cap-inspector-panel-item cap-inspector-panel-row">
                    <label>y偏移量</label>
                    <input type="number" value=50>
                    <select name="" id="">
                        <option value="">%</option>
                        <option value="">px</option>
                    </select>
                </div>
            </div>
        </section>
    </div>
</div>

</template>

<script>
import CapInput from '../common/Input.vue';

export default {
    components: {
        CapInput
    }
};
</script>
