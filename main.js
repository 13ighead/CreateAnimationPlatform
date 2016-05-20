/**
 * @file main
 * @author Bighead
 */
require('reset-css/reset.css');
require('./common/base.less');

let Vue = require('vue');
let Preview = require('./components/Preview.vue');

new Vue({
    el: 'body',
    components: {
        Preview
    }
});
