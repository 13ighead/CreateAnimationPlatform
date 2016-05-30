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
    <span v-show="optionsReadonly">
        {{ opstionsDefaultTitle }}
    </span>
    <select v-show="!optionsReadonly" v-if="options && options.length > 0">
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
        },
        optionsReadonly: {
            type: Boolean,
            reqiured: false,
            default: false
        },
        optionsDefaultValue: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        opstionsDefaultTitle () {
            if (!Array.isArray(this.options)) {
                return '';
            }

            for (let {title, value} of this.options) {
                if (value === this.optionsDefaultValue) {
                    return title;
                }
            }

            return '';
        }
    },
    methods: {
        blur () {

        }
    }
};
</script>
