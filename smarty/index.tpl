{%extends file="./common/base.tpl"%}

{%block name="title"%}demo{%/block%}

{%block name="seo"%}
<meta name="Description" content="">
{%/block%}
{%block name="style"%}
<link rel="stylesheet" href="{%$feRoot%}/src/index.css?v={edp-variable:version}">
{%/block%}

{%block name="main"%}
<div class="cap-preview-container">
    <div class="cap-scene-container">
        <div class="cap-scene outer">
            <div class="cap-element-container">
                <div class="cap-element inner inner1" data-draggable="element">
                    <div class="cap-element-control-layer" style="display:none;">
                        <div class="cap-element-control-row">
                            <div class="cap-element-control-anchor cap-element-control-anchor-nwse cap-element-control-anchor-lt" data-draggable="anchor" data-anchor="scale"></div>
                            <div class="cap-element-control-anchor  cap-element-control-anchor-ns cap-element-control-anchor-t" data-draggable="anchor" data-anchor="height"></div>
                            <div class="cap-element-control-anchor cap-element-control-anchor-nesw cap-element-control-anchor-rt" data-draggable="anchor" data-anchor="scale"></div>
                        </div>
                        <div class="cap-element-control-row">
                            <div class="cap-element-control-anchor cap-element-control-anchor-ew cap-element-control-anchor-l" data-draggable="anchor" data-anchor="width"></div>
                            <div class="cap-element-control-anchor cap-element-control-anchor-ew cap-element-control-anchor-r" data-draggable="anchor" data-anchor="width"></div>
                        </div>
                        <div class="cap-element-control-row">
                            <div class="cap-element-control-anchor cap-element-control-anchor-nesw cap-element-control-anchor-lb" data-draggable="anchor" data-anchor="scale"></div>
                            <div class="cap-element-control-anchor cap-element-control-anchor-ns cap-element-control-anchor-b" data-draggable="anchor" data-anchor="height"></div>
                            <div class="cap-element-control-anchor cap-element-control-anchor-nwse cap-element-control-anchor-rb" data-draggable="anchor" data-anchor="scale"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="cap-element-container">
                <div class="cap-element inner inner2" data-draggable="element">
                </div>
            </div>

            <div class="cap-element-container">
                <div class="origin">
                </div>
            </div>
        </div>
    </div>
    <aside class="cap-inspector-container">
        <div class="cap-inspector">
            <header class="cap-inspector-header">
                <nav class="cap-inspector-nav">
                    <a data-inspector-tab-type="measure" href="javascript:void(0);" class="cap-inspector-tab cap-inspector-tab-selected measure"><abbr title="Measure">布局</abbr></a>
                    <a data-inspector-tab-type="element" href="javascript:void(0);" class="cap-inspector-tab element"><abbr title="Element">效果</abbr></a>
                    <a data-inspector-tab-type="typesetting" href="javascript:void(0);" class="cap-inspector-tab typesetting"><abbr title="Typesetting">排版</abbr></a>
                    <div class="cap-inspector-tab-highlightline"></div>
                </nav>
            </header>
            {%include file="./inspector/measure.tpl" inline%}
            {%include file="./inspector/element.tpl" inline%}
            {%include file="./inspector/typesetting.tpl" inline%}
            <aside class="cap-inspector-handle">
                <i class="icon"></i>
            </aside>
        </div>
    </aside>
</div>

{%strip%}
{%/strip%}
{%/block%}
{%block name="js"%}
<script>
require(['index'], function (main) {
    main.init();
});
</script>

{%/block%}
