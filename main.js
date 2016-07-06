/**
 * @file main
 * @author Bighead
 */

require('./common/base.less');

// main.js
var Vue = require('vue');
// require a *.vue component
var Preview = require('./components/Preview.vue');



// mount a root Vue instance
new Vue({
    el: 'body',
    components: {
        // include the required component
        // in the options
        preview: Preview
    }
});
