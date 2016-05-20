<style scoped lang='less'>
</style>

<template id='Input'>
    <label>{{title}}</label>
    <input type={{type}} value={{value}}>
</template>

<script>
export default {
    props: {
        title: {
            type: String
        },
        type: {
            type: String,
            default: 'text'
        },
        value: {
            type: null
        }
    }
}
</script>
