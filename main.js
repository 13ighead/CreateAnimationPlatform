/**
 * @file main
 * @author Bighead
 */
require('reset-css/reset.css');
require('./common/base.less');

var Vue = require('vue');
var Preview = require('./components/Preview.vue');

new Vue({
    el: 'body',
    components: {
        preview: Preview
    }
});
