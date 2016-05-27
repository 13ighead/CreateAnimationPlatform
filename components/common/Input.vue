<style scoped lang='less'>
</style>

<template id='Input'>
    <label class="cap-inspector-label">
        {{title}}
    </label>
    <input class="cap-inspector-input"
        :type="type"
        :readonly="readonly"
        v-model="value"
        @blur="blur"
    >
    <select v-if="options && options.length > 0">
        <option v-for="item in options"
            :value="item.value">
            {{ item.title }}
        </option>
    </select>
    <span v-if="otherText" class="cap-inspector-text">{{ otherText }}</span>
</template>

<script>
export default {
    name: 'CapInput',
    ready () {

    },
    props: {
        title: {
            type: String,
            required: false,
            default: ''
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        },
        value: {
            type: null,
            required: false,
            default: ''
        },
        readonly: {
            type: Boolean,
            required: false,
            default: false
        },
        options: {
            type: Array,
            required: false,
            default: () => []
        }
    },
    methods: {
        blur () {

        }
    }
};
</script>
