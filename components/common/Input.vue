<style scoped lang='less'>
.cap-inspector-input {
    width: 50px;
}
</style>

<template>
    <label class='cap-inspector-label'>
        {{title}}
    </label>
    <input class='cap-inspector-input'
        :type='type'
        :readonly='readonly'
        v-model='value'
        @input="input"
    >
    <span v-if='optionsReadonly'>
        {{ opstionsTitle }}
    </span>
    <select
        v-else='!optionsReadonly'
        v-if='options && options.length > 0'
        v-model='selected'
    >
        <option v-for='item in options'
            :value='item.value'
            :selected='item.value===optionsValue'
        >
            {{ item.title }}
        </option>
    </select>
    <span v-if='otherText' class='cap-inspector-text'>{{ otherText }}</span>
</template>

<script>
import CapInputBase from './InputBase.vue';

export default {
    name: 'CapInput',
    ready () {

    },
    mixins: [CapInputBase],
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
        optionsValue: {
            type: Number,
            required: false,
            default: 0
        }
    },
    computed: {
        opstionsTitle () {
            if (!Array.isArray(this.options)) {
                return '';
            }

            for (let {title, value} of this.options) {
                if (value === this.optionsValue) {
                    return title;
                }
            }
            return '';
        }
    },
    methods: {
        input () {
            if (this.value !== '') {
                return;
            }

            if (this.type === 'number') {
                this.value = 0;
            }

            if (this.type === 'color') {
                this.value = 'transparent';
            }
        }
    },
    data () {
        return {
            selected: this.selected
        }
    }
};
</script>
