
define(function(require) {
    var $ = require('jquery');
    var draggableDom = $('[data-draggable=true]');

    draggableDom.on('mousedown', function (event) {
        console.log(event);
    });

    return {
        init: function () {}
    };
});
