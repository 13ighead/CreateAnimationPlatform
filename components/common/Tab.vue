<style scoped lang='less'>
.cap-tab {
    position: relative;
    display: flex;
    height: 100%;
    justify-content: space-around;
    align-items: center;
    overflow: hidden;

    .cap-tab-highlightline {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 2px;
        transition: left 0.5s ease-in-out;
    }

}
</style>

<template>
    <nav class="cap-tab">
        <slot></slot>
        <div class="cap-tab-highlightline" :style="[lineStyle]"></div>
    </nav>
</template>

<script>
export default {
    name: 'CapTab',
    ready () {
        const tabList = this.$el.querySelectorAll('.cap-tab-item')
        this.tabCount = tabList.length
        this.lineWidth = `${100 / this.tabCount}%`
        this.index = this.defaultIndex
    },
    props: {
        activeColor: {
            type: String,
            required: false,
            default: '#03a9f4'
        },
        defaultColor: {
            type: String,
            required: false,
            default: '#000'
        },
        defaultIndex: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        lineLeft () {
            return `${this.index * (100 / this.tabCount)}%`
        },
        lineStyle () {
            return {
                left: this.lineLeft,
                backgroundColor: this.activeColor,
                width: this.lineWidth
            }
        },
        hoverLeft () {
            return `${this.hoverIndex * (100 / this.tabCount)}%`
        },
        hoverStyle () {
            return {
                left: this.hoverLeft,
                backgroundColor: this.activeColor,
                width: this.lineWidth
            }
        }
    },
    watch: {
        index (val) {
            this.$broadcast('b_change_index', val)
        }
    },
    events: {
        'd_change_index' (index) {
            this.index = index
        },
        'd_hover_index' (index) {
            this.hoverIndex = index
        }
    },
    data () {
        return {
            index: -1,
            hoverIndex: 0
        }
    }
}
</script>
