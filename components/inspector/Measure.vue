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
                    <label>左</label>
                    <input type="number" value=0>
                </div>
                <div class="cap-inspector-panel-item">
                    <label>上</label>
                    <input type="number" value=0>
                </div>
            </div>
        </section>
        <section class="cap-inspector-panel-section cap-border-bottom">
            <header>
                <h4>尺寸</h4>
            </header>
            <div class="cap-inspector-panel-row">
                <div class="cap-inspector-panel-item">
                    <label>宽度</label>
                    <input type="number" value=0>
                </div>
                <div class="cap-inspector-panel-item">
                    <label>高度</label>
                    <input type="number" value=0>
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
                    <label>宽度</label>
                    <input type="number" value=0>
                </div>
                <div class="cap-inspector-panel-item">
                    <label>高度</label>
                    <input type="number" value=0>
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
                    <label>x轴</label>
                    <input type="number" value=0>
                </div>
                <div class="cap-inspector-panel-item">
                    <label>y轴</label>
                    <input type="number" value=0>
                </div>
                <div class="cap-inspector-panel-item">
                    <label>z轴</label>
                    <input type="number" value=0>
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
