<style scoped lang='less'>
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
    }
</style>

<template>
    <div :style="style">
        <div class="label">
            x: {{state.measure.x}}
            y: {{state.measure.y}}
            width: {{state.measure.width}}
            height: {{state.measure.height}}
            rotate: {{state.measure.rotate.x}} {{state.measure.rotate.y}} {{state.measure.rotate.z}}
            scale: {{state.measure.scale.x}} {{state.measure.scale.y}}
        </div>
        <div class="origin-style" :style="originStyle"></div>
    </div>

</template>

<script>
export default {
    name: 'CapLayer',
    ready () {

    },
    props: ['state'],
    computed: {
        style () {
            return {
                border: "1px solid black",
                backgroundColor: "#eeff00",
                position: 'relative',
                width: `${this.state.measure.width}px`,
                height: `${this.state.measure.height}px`,
                transformOrigin: `${this.state.measure.origin.x}px ${this.state.measure.origin.y}px`,
                transform: `translateX(${this.state.measure.x}px)
                            translateY(${this.state.measure.y}px)
                            rotateX(${this.state.measure.rotate.x}deg)
                            rotateY(${this.state.measure.rotate.y}deg)
                            rotateZ(${this.state.measure.rotate.z}deg)
                            scaleX(${this.state.measure.scale.x})
                            scaleY(${this.state.measure.scale.y})`

            }
        },
        originStyle () {
            return {
                left: `${this.state.measure.origin.x}px`,
                top: `${this.state.measure.origin.y}px`
            }
        }
    }
}
</script>
