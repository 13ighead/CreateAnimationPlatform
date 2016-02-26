/*
 * @file Entrance
 * @author Bighead
 */
define(function (require) {
    var $ = require('jquery');
    window.$ = $;
    var draggableDom = $('[data-draggable=true]');
    var sceneDom = $('.cap-scene');

    draggableDom.on('mousedown', function (event) {

        var mouseX = event.clientX;
        var mouseY = event.clientY;

        this.beginMousePosition = {
            x: mouseX,
            y: mouseY
        };

    });

    draggableDom.on('mousemove', function (event) {
        if (!this.beginMousePosition) {
            return;
        }
        var mouseX = event.clientX;
        var mouseY = event.clientY;
        var offsetMousePosition = {
            x: mouseX - this.beginMousePosition.x,
            y: mouseY - this.beginMousePosition.y
        };
        console.log(offsetMousePosition);
        // var offsetY = clientY - this.capClientY;
        // $(this).css({
        //     transform: 'scale(2) translateX(' + offsetX + 'px) translateY(' + offsetY + 'px)'
        // });
    });

    draggableDom.on('mouseup', function (event) {
        this.beginMousePosition = null;
    });

    return {
        init: function () {}
    };
});
