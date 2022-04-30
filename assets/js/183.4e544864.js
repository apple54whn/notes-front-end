(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{762:function(t,a,s){"use strict";s.r(a);var r=s(21),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"微信小程序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[t._v("#")]),t._v(" 微信小程序")]),t._v(" "),s("h2",{attrs:{id:"准备-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#准备-🔥"}},[t._v("#")]),t._v(" 准备 🔥")]),t._v(" "),s("h3",{attrs:{id:"开发前"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发前"}},[t._v("#")]),t._v(" 开发前")]),t._v(" "),s("ul",[s("li",[t._v("申请 appid。appsecret 在服务端有用")])]),t._v(" "),s("h3",{attrs:{id:"配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),s("ul",[s("li",[t._v("[x] ES6 转 ES5")]),t._v(" "),s("li",[t._v("[x] 增强编译。为了使用 async、await")]),t._v(" "),s("li",[t._v("[x] 使用 npm 模块")]),t._v(" "),s("li",[t._v('[ ] 开发阶段可以勾上"不校验合法域名"，方便开发阶段使用 HTTP 协议')])]),t._v(" "),s("h3",{attrs:{id:"使用-npm-包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-npm-包"}},[t._v("#")]),t._v(" 使用 NPM 包")]),t._v(" "),s("p",[t._v("npn init 后安装。之后可以在 node_modules 该 npm 包的 package.json 中 "),s("code",[t._v("version")]),t._v("查看真实安装的版本，"),s("code",[t._v("_id")]),t._v("不知是不是")]),t._v(" "),s("p",[t._v("还需要安装后点击「工具」—「构建 npm」，构建完毕会自动创建 miniprogram_npm 目录，这个才是最终要引用的组件目录。此时 node_modules 就没有用了，除非再次构建")]),t._v(" "),s("h3",{attrs:{id:"npm-semver-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#npm-semver-🔥"}},[t._v("#")]),t._v(" NPM semver 🔥")]),t._v(" "),s("p",[t._v("版本号规则")]),t._v(" "),s("p",[s("code",[t._v("~0.6.2")]),t._v("：只会安装"),s("code",[t._v("0.6.x")]),t._v("中第三位 latest 版本")]),t._v(" "),s("p",[s("code",[t._v("^0.6.2")]),t._v("：会安装"),s("code",[t._v("0.x.x")]),t._v("中第二、三位 latest 版本")]),t._v(" "),s("h2",{attrs:{id:"数据单向绑定-简易的数据双向绑定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据单向绑定-简易的数据双向绑定"}},[t._v("#")]),t._v(" 数据单向绑定 & 简易的数据双向绑定")]),t._v(" "),s("p",[t._v("Vue 是双向数据绑定，可以绑定复杂的数据")]),t._v(" "),s("p",[t._v("微信小程序支持简易的数据双向绑定，只有 input 的 value 支持！！！")]),t._v(" "),s("h2",{attrs:{id:"回调地狱-解决-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#回调地狱-解决-🔥"}},[t._v("#")]),t._v(" 回调地狱 & 解决 🔥")]),t._v(" "),s("h3",{attrs:{id:"callback"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#callback"}},[t._v("#")]),t._v(" callback")]),t._v(" "),s("p",[t._v("由于微信小程序的 wx.request 为"),s("strong",[t._v("异步请求")]),t._v("，且"),s("strong",[t._v("使用的是回调函数来获取返回值")]),t._v("（回调地狱），使用"),s("strong",[t._v("不同函数来调用")]),t._v("时为了不产生回调地狱，则必须使用 callback 来处理返回值，有多少层调用就会有多个 callback，很是难受。")]),t._v(" "),s("p",[t._v("所以可以封装 Promise。")]),t._v(" "),s("h3",{attrs:{id:"promise"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" Promise")]),t._v(" "),s("h3",{attrs:{id:"async-await"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async await")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("ES8 语法，需要在小程序勾选"),s("strong",[t._v("增强编译")])])]),t._v(" "),s("li",[s("p",[t._v("async 只是一个"),s("strong",[t._v("标识符")]),t._v("，用于"),s("strong",[t._v("声明异步函数")])])]),t._v(" "),s("li",[s("p",[t._v("只有在函数（方法）"),s("strong",[t._v("有 return 返回值时")]),t._v("，这个值才会被 Promise.resolve() 包装为 Promise 对象（可以无需手动 new）；否则还是同步执行的！")])]),t._v(" "),s("li",[s("p",[t._v("await 用于"),s("strong",[t._v("暂停")]),t._v("执行"),s("strong",[t._v("异步函数")]),t._v("后面的代码，等待 Promise 对象被 resolve")])])]),t._v(" "),s("h2",{attrs:{id:"js-基础"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-基础"}},[t._v("#")]),t._v(" JS 基础")]),t._v(" "),s("h3",{attrs:{id:"es6-模版字符串"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#es6-模版字符串"}},[t._v("#")]),t._v(" ES6 模版字符串")]),t._v(" "),s("h3",{attrs:{id:"普通函数-vs-箭头函数的-this-指向问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#普通函数-vs-箭头函数的-this-指向问题"}},[t._v("#")]),t._v(" 普通函数 VS 箭头函数的 this 指向问题")]),t._v(" "),s("h2",{attrs:{id:"前端分层-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前端分层-🔥"}},[t._v("#")]),t._v(" 前端分层 🔥")]),t._v(" "),s("p",[t._v("前端 view 层的 JS 是否应该写业务逻辑？")]),t._v(" "),s("ul",[s("li",[t._v("一般 View 层应该仅做"),s("strong",[t._v("数据绑定")])])]),t._v(" "),s("p",[t._v("抽取 model 层")]),t._v(" "),s("ul",[s("li",[t._v("数据流转等操作应该放在 model 层，而最终的数据交由 view 层来绑定、渲染")])]),t._v(" "),s("h2",{attrs:{id:"js-面向对象-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#js-面向对象-🔥"}},[t._v("#")]),t._v(" JS 面向对象 🔥")]),t._v(" "),s("ul",[s("li",[t._v("比较麻烦，因为没有类型约束！")]),t._v(" "),s("li",[t._v("需要考虑对象的状态所在类（不要太扣细节！太过于求完美！）")])]),t._v(" "),s("h2",{attrs:{id:"组件设计通用原则-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件设计通用原则-🔥"}},[t._v("#")]),t._v(" 组件设计通用原则 🔥")]),t._v(" "),s("h3",{attrs:{id:"组件目的"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件目的"}},[t._v("#")]),t._v(" 组件目的")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("对骨架、样式、业务逻辑（行为）的封装")]),t._v(" "),s("p",[t._v("业务逻辑这里可以使用"),s("strong",[t._v("计数器组件")]),t._v("来说明。有时需要根据货物数量来限制增减等")])])]),t._v(" "),s("h3",{attrs:{id:"灵活性和易用性取舍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#灵活性和易用性取舍"}},[t._v("#")]),t._v(" 灵活性和易用性取舍")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("易用性：可封装原有组件，来限制以获取易用性（提高稳定）")])]),t._v(" "),s("li",[s("p",[t._v("灵活性（可提供如下方式实现）：")]),t._v(" "),s("ul",[s("li",[s("p",[s("strong",[t._v("Slot 插槽")])])]),t._v(" "),s("li",[s("p",[s("strong",[t._v("外部样式类")])])]),t._v(" "),s("li",[s("p",[t._v("业务逻辑（其实没有灵活的，目前只能做到提供多种业务逻辑，通过对属性传参来决定。否则就是另一个组件了）")]),t._v(" "),s("p",[t._v("可以提供 Behavior 行为来让使用者自定义")])])])]),t._v(" "),s("li",[s("p",[t._v("可提供**默认值（样式、插槽）**来中和")])])]),t._v(" "),s("h3",{attrs:{id:"样式宽高的固定"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#样式宽高的固定"}},[t._v("#")]),t._v(" 样式宽高的固定")]),t._v(" "),s("ul",[s("li",[t._v("固定高宽，你必须要有理由，比如为了点击事件的区域更大。")]),t._v(" "),s("li",[t._v("固定高宽，弊端就是版本更迭很繁琐。修改和维护不方便。")]),t._v(" "),s("li",[t._v("固定高宽，数值难以确定。")])]),t._v(" "),s("p",[t._v("写样式时（特别是组件开发），width 指定 750rpx 则可以用 100% 替代，因为父容器的宽度不确定性")]),t._v(" "),s("h2",{attrs:{id:"小程序自定义组件的坑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序自定义组件的坑"}},[t._v("#")]),t._v(" 小程序自定义组件的坑")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("自定义组件添加 margin 无效解决：1.给原生组件加；2.view包裹；3.自定义外部样式类")])]),t._v(" "),s("li",[s("p",[t._v("自定义组件无法使用 app.wxss 中定义的样式，需要自己写，然后 @import 导入！")])])]),t._v(" "),s("h2",{attrs:{id:"https-证书"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#https-证书"}},[t._v("#")]),t._v(" HTTPS 证书")]),t._v(" "),s("ul",[s("li",[t._v("lets encrypt")]),t._v(" "),s("li",[t._v("caddy")])]),t._v(" "),s("h2",{attrs:{id:"首页请求数量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#首页请求数量"}},[t._v("#")]),t._v(" 首页请求数量")]),t._v(" "),s("ul",[s("li",[t._v("HTTP 请求数量")]),t._v(" "),s("li",[t._v("数据库查询次数，join")]),t._v(" "),s("li",[t._v("接口灵活性、可维护性")])]),t._v(" "),s("h2",{attrs:{id:"wxs-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wxs-js"}},[t._v("#")]),t._v(" WXS & JS")]),t._v(" "),s("ul",[s("li",[t._v("逻辑层：JS")]),t._v(" "),s("li",[t._v("视图层：要在小程序的 wxml 中写 js，只能使用 wxs（只支持 ES5！！！）")])]),t._v(" "),s("h2",{attrs:{id:"observer-监听器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#observer-监听器"}},[t._v("#")]),t._v(" Observer 监听器")]),t._v(" "),s("h2",{attrs:{id:"hover-点击态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#hover-点击态"}},[t._v("#")]),t._v(" Hover 点击态")]),t._v(" "),s("ul",[s("li",[t._v("view 的动画使用")])]),t._v(" "),s("h2",{attrs:{id:"scroll-view-的一些问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#scroll-view-的一些问题"}},[t._v("#")]),t._v(" scroll-view 的一些问题")]),t._v(" "),s("p",[t._v("enable-flex 为 true 的 scroll-view x 轴滚动时 y 轴留白问题，解决：")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("align-items")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" center"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("也可以取消 scroll-view 的 enable-flex，采用内嵌 view，给该 view 来设置 flex")]),t._v(" "),s("h2",{attrs:{id:"图片下面多出10rpx左右问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片下面多出10rpx左右问题"}},[t._v("#")]),t._v(" 图片下面多出10rpx左右问题")]),t._v(" "),s("div",{staticClass:"language-css line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h2",{attrs:{id:"单行文字省略问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单行文字省略问题"}},[t._v("#")]),t._v(" 单行文字省略问题")]),t._v(" "),s("p",[t._v("由于必须指定 width，所以有时可以使用 js 来截取，或者 wxs 来截取")]),t._v(" "),s("h2",{attrs:{id:"触摸区大小-width"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#触摸区大小-width"}},[t._v("#")]),t._v(" 触摸区大小 width")]),t._v(" "),s("p",[t._v("为了触摸区大点，来指定 width")]),t._v(" "),s("h2",{attrs:{id:"抽象节点-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#抽象节点-🔥"}},[t._v("#")]),t._v(" 抽象节点 🔥")]),t._v(" "),s("p",[t._v("类似 "),s("strong",[t._v("插槽")])]),t._v(" "),s("h2",{attrs:{id:"不使用-setdata"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#不使用-setdata"}},[t._v("#")]),t._v(" 不使用 setData")]),t._v(" "),s("p",[t._v("有些数据无需渲染，使用 this.data.xxx = xxx 即可")]),t._v(" "),s("h2",{attrs:{id:"rpx-机型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rpx-机型"}},[t._v("#")]),t._v(" rpx—机型")]),t._v(" "),s("p",[t._v("只有在 iPhone 6 上才满足 2rpx = 1px")]),t._v(" "),s("h2",{attrs:{id:"上拉加载"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上拉加载"}},[t._v("#")]),t._v(" 上拉加载")]),t._v(" "),s("h3",{attrs:{id:"阈值修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阈值修改"}},[t._v("#")]),t._v(" 阈值修改")]),t._v(" "),s("p",[t._v("app.json修改即可")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("onReachBottomDistance\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("h3",{attrs:{id:"状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#状态"}},[t._v("#")]),t._v(" 状态")]),t._v(" "),s("ol",[s("li",[t._v("点击（下拉）加载（基本不会看到该状态！！）")]),t._v(" "),s("li",[t._v("加载中；")]),t._v(" "),s("li",[t._v("没有更多")])]),t._v(" "),s("p",[t._v("总之就是12123这样的循环，但是1基本不会出现！")]),t._v(" "),s("h2",{attrs:{id:"图片-bind-load"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#图片-bind-load"}},[t._v("#")]),t._v(" 图片 bind:load")]),t._v(" "),s("p",[t._v("使用该方式来动态指定图片长宽")]),t._v(" "),s("h2",{attrs:{id:"小程序的渲染层对对象的封装-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序的渲染层对对象的封装-🔥"}},[t._v("#")]),t._v(" 小程序的渲染层对对象的封装 🔥")]),t._v(" "),s("p",[t._v("注意，经过小程序渲染层后，对象已经不再是原来的对象，无法根据引用类型特征，直接修改！")]),t._v(" "),s("h2",{attrs:{id:"直接事件转发-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#直接事件转发-🔥"}},[t._v("#")]),t._v(" 直接事件转发 🔥")]),t._v(" "),s("p",[t._v("自己封装开源组件为新的组件，那么该开源组件的事件可以"),s("strong",[t._v("直接在使用封装组件的地方调用")]),t._v("，会自动转发！！")]),t._v(" "),s("h2",{attrs:{id:"自定义分享按钮样式-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自定义分享按钮样式-🔥"}},[t._v("#")]),t._v(" 自定义分享按钮样式 🔥")]),t._v(" "),s("p",[t._v("没有 API ！！！必须使用原生 button！！！样式比较难修改！！！")]),t._v(" "),s("ul",[s("li",[t._v("盖住原生 button。比较麻烦")]),t._v(" "),s("li",[t._v("使用 lin-ui button。牛皮的很啊！🔥")])]),t._v(" "),s("h2",{attrs:{id:"text-标签不要随便换行🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-标签不要随便换行🔥"}},[t._v("#")]),t._v(" text 标签不要随便换行🔥")]),t._v(" "),s("p",[t._v("否则会有空行！")]),t._v(" "),s("h2",{attrs:{id:"linui-的-tabs-标签页-segment-选项卡"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linui-的-tabs-标签页-segment-选项卡"}},[t._v("#")]),t._v(" LinUI 的 Tabs 标签页 & Segment 选项卡")]),t._v(" "),s("ul",[s("li",[t._v("Tabs 标签页：标签 和 页面！是2个联动起来的")]),t._v(" "),s("li",[t._v("Segment 选项卡：只管理标签！方便使用")])]),t._v(" "),s("h2",{attrs:{id:"屏幕宽高-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#屏幕宽高-🔥"}},[t._v("#")]),t._v(" 屏幕宽高 🔥")]),t._v(" "),s("div",{staticClass:"language-js line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("getSystemSize")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// const res = await promisic(wx.getSystemInfo)()")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" res "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" wxp"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSystemInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("windowHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windowHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可使用窗口宽度，单位px")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("windowWidth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("windowWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可使用窗口高度，单位px。除去原生配置的 tabbar，导航栏")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("screenWidth")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenWidth"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏幕宽度，单位px")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("screenHeight")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("screenHeight"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 屏幕高度，单位px")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br")])]),s("p",[t._v("不同机型之间 rpx 和 px 比例可有上述计算")]),t._v(" "),s("h2",{attrs:{id:"console-log-数字-字符串-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#console-log-数字-字符串-🔥"}},[t._v("#")]),t._v(" console.log 数字 & 字符串 🔥")]),t._v(" "),s("ul",[s("li",[t._v("数字为"),s("strong",[t._v("蓝色")]),t._v("表示！")]),t._v(" "),s("li",[t._v("字符串为"),s("strong",[t._v("黑色")]),t._v("！")])]),t._v(" "),s("h2",{attrs:{id:"小程序长列表组件-🔥"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#小程序长列表组件-🔥"}},[t._v("#")]),t._v(" 小程序长列表组件 🔥")]),t._v(" "),s("p",[t._v("普通列表，追加时，setData 会造成全部都需要重新渲染，而小程序不允许渲染这么多，所以到后面的数据就不会显示了。")]),t._v(" "),s("p",[t._v("推荐使用 recycle-view 长列表组件来实现！！！")])])}),[],!1,null,null,null);a.default=e.exports}}]);