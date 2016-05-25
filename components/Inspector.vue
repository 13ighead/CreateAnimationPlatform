<style scoped lang='less'>
@cap-inspector-tab-selectedcolor: #03a9f4;
@cap-inspector-handle-bgcolor: #ddd;

cap-inspector {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    border-left: 1px solid #ddd;

    .cap-inspector-header {
        background-color: #fff;
        width: 100%;
        height: 40px;
    }

    .cap-inspector-panel {
        padding: 12px;
        overflow: scroll;

        .cap-inspector-panel-header {
            padding: 0 0 8px;
            font-size: 18px;
        }

        .cap-inspector-panel-inner {

            .cap-inspector-panel-section {
                padding: 8px 0;

                header {
                    padding: 0 0 6px;
                    font-size: 16px;
                }

                .cap-inspector-panel-row {
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }

                .cap-inspector-panel-item {

                    label {
                        font-size: 14px;
                        line-height: 23px;
                        height: 23px;
                        display: inline-block;
                    }

                    input[type="number"] {
                        width: 40px;
                    }
                }
            }
        }
    }

    .cap-inspector-handle {
        position: absolute;
        top: 50%;
        left: -10px;
        transform: translate(0, -50%);
        width: 10px;
        height: 20%;
        background-color: @cap-inspector-handle-bgcolor;

        &::before,
        &::after {
            position: absolute;
            display: block;
            content: '';
            border: 5px solid @cap-inspector-handle-bgcolor;
            border-left: 5px solid transparent;
        }

        &::before {
            top: -10px;
            border-top: 5px solid transparent;
        }

        &::after {
            bottom: -10px;
            border-bottom: 5px solid transparent;
        }

        .icon {
            display: inline-block;
            width: 10px;
            height: 10px;
            left: 50%;
            top: 50%;
            position: absolute;
            transform: translate(-50%, -50%) rotate(90deg);
            background: url('~/img/option.svg') center/cover no-repeat;
        }
    }
}
</style>

<template>
    <cap-inspector>
        <header class="cap-inspector-header">
            <cap-tab
                :default-index=0
                active-color="#2196F3"
                line-color="#2196F3"
                :items="items"
            >
            </cap-tab>
        </header>
        <component :is="currentView"></component>
        <aside class="cap-inspector-handle">
            <i class="icon"></i>
        </aside>
    </cap-inspector>
</template>

<script>
import Measure from './inspector/Measure.vue'
import Element from './inspector/Element.vue'
import Typesetting from './inspector/Typesetting.vue'
import CapTab from './common/Tab.vue'


export default {
    components: {
        Measure,
        Element,
        Typesetting,
        CapTab
    },
    events: {
        d_change_index (val) {
            this.currentView = this.items[val].name
        }
    },
    data () {
        return {
            items: [
                {
                    title: "布局",
                    name: "Measure"
                },
                {
                    title: "效果",
                    name: "Element"
                },
                {
                    title: "排版",
                    name: "Typesetting"
                }
            ],
            currentView: "Measure"
        }
    }
}

</script>
