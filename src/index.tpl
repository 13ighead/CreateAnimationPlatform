{%extends file="./common/base.tpl"%}

{%block name="title"%}demo{%/block%}

{%block name="seo"%}
<meta name="Description" content="">
{%/block%}
{%block name="style"%}
<link rel="stylesheet" href="{%$feRoot%}/src/index.css?v={edp-variable:version}">
{%/block%}

{%block name="main"%}
<div class="scene outer">
    <div class="element-container">
        <div class="element inner inner1" data-draggable="true">
        </div>
    </div>

    <div class="element-container">
        <div class="element inner inner2" data-draggable="true">
        </div>
    </div>

    <div class="origin">
    </div>
</div>
{%strip%}
{%/strip%}
{%/block%}
{%block name="mainjs"%}
require(['index'], function (main) {
    main.init();
});
{%/block%}
{%block name="js"%}
{%/block%}
