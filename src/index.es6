/*
 * @file Entrance
 * @author Bighead
 */
define(function (require) {
    
    var $ = window.$ = require('jquery');
    var etpl = require('etpl');
    var draggableDom = $('[data-draggable]');
    var sceneDom = $('.cap-scene');
    var transformTpl = ['<!-- target: transformTpl -->',
        'translateX(${translateX}px) translateY(${translateY}px)',
        'scaleX(${scaleX}) scaleY(${scaleY})',
        'skewX(${skewX}) skewY(${skewY})',
        'rotate(${rotate}deg)'].join(' ');

    /*
     * transform2D矩阵转KV
     * @param  {string} matrixString transform2D矩阵
     * @return {Object}              KV
     */
    function matrix2kv(matrixString) {
        var matrixArray = matrixString.replace(/matrix\(|\)/g, '').split(',');
        var rotate = Math.atan2(matrixArray[1], matrixArray[0]);
        var quadraticSum = Math.pow(matrixArray[0], 2) + Math.pow(matrixArray[1], 2);
        var scaleX = Math.sqrt(quadraticSum);
        var scaleY = (matrixArray[0] * matrixArray[3] - matrixArray[2] * matrixArray[1]) / scaleX;
        var skewX = Math.atan2(matrixArray[0] * matrixArray[2] + matrixArray[1] * matrixArray[3], quadraticSum);

        return {
            rotate: rotate / (Math.PI / 180),
            scaleX: scaleX,
            scaleY: scaleY,
            skewX: skewX / (Math.PI / 180),
            skewY: 0,
            translateX: +matrixArray[4].trim(),
            translateY: +matrixArray[5].trim()
        };
    }

    /*
     * 通过transform矩阵获取某点真实坐标
     * @param  {Object} point        某点原坐标
     * @param  {string} matrixString transform矩阵字符串
     * @return {Object}              换算后的坐标
     */
    function getTransformPositionWithMatrix(point, matrixString) {
        var matrixArray = matrixString.replace(/matrix\(|\)|\ /g, '').split(',');
        var newX = (+point.x * +matrixArray[0]) + (+point.y * +matrixArray[2]) + (+matrixArray[4]);
        var newY = (+point.x * +matrixArray[1]) + (+point.y * +matrixArray[3]) + (+matrixArray[5]);

        return {
            x: newX,
            y: newY
        };
    }

    /*
     * 获取某dom的transform-origin相对于父节点的准确坐标
     * @param  {html dom} dom dom节点
     * @return {Object}     坐标
     */
    function getAbsolutePositionOfTransformOrigin(dom) {
        var $dom = $(dom);
        var originString = $dom.css('transform-origin');
        var originArray = originString.replace(/px/g, '').split(' ');
        var originPosition = {
            x: originArray[0],
            y: originArray[1]
        };
        var transformMatrix = $dom.css('transform');
        var domPosition = $dom.position();

        var originPositionWithTransform = getTransformPositionWithMatrix(originPosition, transformMatrix);

        return {
            x: domPosition.top + originPositionWithTransform.x,
            y: domPosition.left + originPositionWithTransform.y
        };
    }

    /*
     * 获得两点间距离
     * @param  {Object} point1 点1
     * @param  {Object} point2 点2
     * @return {number}        距离
     */
    function getDistanceBetweenTwoPoints(point1, point2) {
        return Math.sqrt(Math.pow((point2.x - point1.x), 2) + Math.pow((point2.y - point1.y), 2));
    }

    /*
     * 获取当前锚点控制的element
     * @param  {Object} anchor 锚点
     * @return {jQuery Object}        锚点控制的element
     */
    function getElementByAnchor(anchor) {
        var $anchor = $(anchor);
        return $anchor.parents('[data-draggable=element]');
    }

    var dragElementHandler = {
        mousedown: function (event) {
            var target = event.target;
            var $target = $(target);

            if (!$target.data('draggable')) {
                return;
            }

            var mouseX = event.clientX;
            var mouseY = event.clientY;

            draggableDom.addClass('cap-element-static');
            $target.removeClass('cap-element-static');

            target.beginMousePosition = {
                x: mouseX,
                y: mouseY
            };

            var a = matrix2kv($target.css('transform'));

            target.beginDomPosition = {
                x: a.translateX,
                y: a.translateY
            };

            target.absolutePositionOfTransformOrigin = getAbsolutePositionOfTransformOrigin(target);

        },
        mousemove: function (event) {
            var target = event.target;
            var $target = $(target);

            if (!target.beginMousePosition) {
                return;
            }

            var mouseX = event.clientX;
            var mouseY = event.clientY;
            var offsetMousePosition = {
                x: mouseX - target.beginMousePosition.x,
                y: mouseY - target.beginMousePosition.y
            };

            var curTransform = matrix2kv($target.css('transform'));

            curTransform.translateX = target.beginDomPosition.x + offsetMousePosition.x;
            curTransform.translateY = target.beginDomPosition.y + offsetMousePosition.y;
            $target.css('transform', etpl.render('transformTpl', curTransform));

        },
        mouseup: function (event) {
            var target = event.target;

            target.beginMousePosition = null;
            target.beginDomPosition = null;

            draggableDom.removeClass('cap-element-static');
        }
    };

    var dragAnchorHandler = {
        mousedown: function (event) {
            var target = event.target;
            var $target = $(target);

            var element = getElementByAnchor($target);

            console.log(element[0].absolutePositionOfTransformOrigin)

            if (!$target.data('draggable')) {
                return;
            }

            var mouseX = event.clientX;
            var mouseY = event.clientY;

            draggableDom.addClass('cap-element-static');
            $target.removeClass('cap-element-static');

            sceneDom.beginMousePosition = {
                x: mouseX,
                y: mouseY
            };
        },
        mousemove: function (event) {

            if (!sceneDom.beginMousePosition) {
                return;
            }
            var mouseX = event.clientX;
            var mouseY = event.clientY;
            var offsetMousePosition = getDistanceBetweenTwoPoints(sceneDom.beginMousePosition, {
                x: mouseX,
                y: mouseY
            });
        },
        mouseup: function (event) {
            sceneDom.beginMousePosition = null;
        }
    };

    sceneDom.on('mousedown', function (event) {
        var target = event.target;
        var $target = $(target);
        var dragType = $target.data('draggable');

        if (dragType === 'element') {
            dragElementHandler.mousedown(event);
        }

        if (dragType === 'anchor') {
            sceneDom.eventType = 'anchor';
            dragAnchorHandler.mousedown(event);
        }
    });

    sceneDom.on('mousemove', function (event) {
        var target = event.target;
        var $target = $(target);
        var dragType = $target.data('draggable');

        if (dragType === 'element') {
            dragElementHandler.mousemove(event);
        }

        if (sceneDom.eventType === 'anchor') {
            dragAnchorHandler.mousemove(event);
        }
    });

    sceneDom.on('mouseup', function (event) {
        var target = event.target;
        var $target = $(target);
        var dragType = $target.data('draggable');

        if (dragType === 'element') {
            dragElementHandler.mouseup(event);
        }

        if (sceneDom.eventType === 'anchor') {
            sceneDom.eventType = null;
            sceneDom.beginMousePosition = null;
            dragAnchorHandler.mouseup(event);
        }
    });

    function init() {
        etpl.compile(transformTpl);
    }

    return {
        init: init
    };
});
