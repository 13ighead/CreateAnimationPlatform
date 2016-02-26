{%extends file="./common/base.tpl"%}

{%block name="title"%}demo{%/block%}

{%block name="seo"%}
<meta name="Description" content="">
{%/block%}
{%block name="style"%}
<link rel="stylesheet" href="{%$feRoot%}/src/index.css?v={edp-variable:version}">
{%/block%}

{%block name="main"%}
<div class="cap-scene-container">
    <div class="cap-scene outer">
        <div class="cap-element-container">
            <div class="cap-element inner inner1" data-draggable="true">
            </div>
        </div>

        <div class="cap-element-container">
            <div class="cap-element inner inner2" data-draggable="true">
            </div>
        </div>

        <div class="cap-element-container">
            <div class="origin">
            </div>
        </div>
    </div>
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
