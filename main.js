/**
 * @file main
 * @author Bighead
 */
import Vue from 'vue';
import Preview from './components/Preview.vue';

require('./common/base.less');

new Vue({
    el: 'body',
    components: {
        Preview
    }
});
