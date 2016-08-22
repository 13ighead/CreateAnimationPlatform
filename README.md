#CAP - CreateAnimationPlatform


###概述

1. CAP是一个动画编辑平台，本工程是CAP其中预览部分，可以可视化操作图层的一些属性。
2. 本工程使用 webpack + Vue + vuex 构建。

###预览

	npm i
    npm run dev

###结构

1. 入口文件: main.js
2. 主模块为 Preview, 而后分为两部分 Scene 和 Inspector, 分别是左侧画布部分和右侧属性编辑部分。
3. 数据从 vuex 中获取, 所有的操作直接通过 action 修改数据本身, 而后由 Model 来更新 View.

 
