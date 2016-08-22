<script>
export default {
    name: 'CapInputBase',
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
        }
    }
};
</script>
