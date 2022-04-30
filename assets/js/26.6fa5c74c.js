(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{517:function(t,s,a){t.exports=a.p+"assets/img/image-20200709000740439.d9150f95.png"},676:function(t,s,a){"use strict";a.r(s);var v=a(21),n=Object(v.a)({},(function(){var t=this,s=t.$createElement,v=t._self._c||s;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"web-应用的生命周期-🔥"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#web-应用的生命周期-🔥"}},[t._v("#")]),t._v(" Web 应用的生命周期 🔥")]),t._v(" "),v("h2",{attrs:{id:"页面构建阶段"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#页面构建阶段"}},[t._v("#")]),t._v(" 页面构建阶段")]),t._v(" "),v("ul",[v("li",[v("p",[v("strong",[t._v("解析 HTML，构建 DOM")])]),t._v(" "),v("p",[t._v("按顺序解析，即使是 script 标签（只不过会"),v("strong",[t._v("阻塞执行")]),t._v("）。遇到标签放置错误，浏览器会修复并放入该放的位置")])]),t._v(" "),v("li",[v("p",[v("strong",[t._v("执行 JavaScript（可能会注册事件监听器）")])])])]),t._v(" "),v("p",[v("strong",[t._v("全局 window 对象会存在于整个页面的生存期之间")]),t._v("，在它上面"),v("strong",[t._v("存储着所有的 JavaScript 变量")]),t._v("。只要还有没处理完的 HTML 元素和没执行完的 JavaScript 代码，上面两个步骤都会一直交替执行。")]),t._v(" "),v("p",[t._v("当浏览器处理完所有 HTML 元素后，页面构建阶段就结束了。")]),t._v(" "),v("h2",{attrs:{id:"事件处理阶段-事件队列"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件处理阶段-事件队列"}},[t._v("#")]),t._v(" 事件处理阶段—事件队列")]),t._v(" "),v("h3",{attrs:{id:"事件处理器概览"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#事件处理器概览"}},[t._v("#")]),t._v(" 事件处理器概览")]),t._v(" "),v("p",[t._v("在页面构建阶段执行的 JavaScript 代码，除了会"),v("strong",[t._v("影响全局应用状态和修改 DOM")]),t._v("外，还会"),v("strong",[t._v("注册事件监听器")]),t._v("（或处理器）。这类监听器会在事件发生时，由"),v("strong",[t._v("浏览器调用执行")]),t._v("。")]),t._v(" "),v("p",[t._v("浏览器执行环境的核心思想基于："),v("strong",[t._v("同一时刻只能执行一个代码片段，即所谓的单线程执行模型")]),t._v("。事件处理流程如下：")]),t._v(" "),v("ul",[v("li",[t._v("浏览器"),v("strong",[t._v("检查事件队列头")]),t._v("；")]),t._v(" "),v("li",[t._v("如果浏览器没有在队列中检测到事件，则继续检查；")]),t._v(" "),v("li",[t._v("如果浏览器在队列头中检测到了事件，则"),v("strong",[t._v("取出该事件并执行相应的事件处理器")]),t._v("（如果存在）。")])]),t._v(" "),v("p",[t._v("在这个过程中，"),v("strong",[t._v("余下的事件在事件队列中耐心等待")]),t._v("，直到轮到它们被处理。")]),t._v(" "),v("img",{staticStyle:{zoom:"50%"},attrs:{src:a(517),alt:"image-20200709000740439"}}),t._v(" "),v("p",[t._v("重点注意浏览器在这个过程中的机制，"),v("strong",[t._v("其放置事件的队列是在页面构建阶段和事件处理阶段以外")]),t._v("的。这个过程对于决定事件何时发生并将其推入事件队列很重要，"),v("strong",[t._v("这个过程不会参与事件处理线程")]),t._v("。")]),t._v(" "),v("h4",{attrs:{id:"异步事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#异步事件"}},[t._v("#")]),t._v(" 异步事件")]),t._v(" "),v("p",[t._v("事件可能会以难以预计的时间和顺序发生（强制用户以某个顺序按键或单击是非常奇怪的）。我们对事件的处理，以及处理函数的调用是异步的。如下类型的事件会在其他类型事件中发生。")]),t._v(" "),v("ul",[v("li",[t._v("浏览器事件，例如当页面加载完成后或无法加载时；")]),t._v(" "),v("li",[t._v("网络事件，例如来自服务器的响应（Ajax 事件和服务器端事件）；")]),t._v(" "),v("li",[t._v("用户事件，例如鼠标单击、鼠标移动和键盘事件；")]),t._v(" "),v("li",[t._v("计时器事件，当 timeout 时间到期或又触发了一次时间间隔。")])]),t._v(" "),v("p",[t._v("Web 应用的 JavaScript 代码中，大部分内容都是对上述事件的处理！")]),t._v(" "),v("p",[v("strong",[t._v("除了全局代码，页面中的大部分代码都将作为某个事件的结果执行")]),t._v("。")]),t._v(" "),v("h3",{attrs:{id:"注册事件处理器"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#注册事件处理器"}},[t._v("#")]),t._v(" 注册事件处理器")]),t._v(" "),v("p",[t._v("事件处理器是"),v("strong",[t._v("当某个特定事件发生后我们希望执行的函数")]),t._v("。"),v("strong",[t._v("告知浏览器要处理哪个事件的过程叫做注册事件处理器")]),t._v("。")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("通过把函数赋给某个特殊属性。"),v("strong",[t._v("不推荐")]),t._v("，因为"),v("strong",[t._v("对于某个事件只能注册一个事件处理器")]),t._v("，可能会覆盖掉上一个事件处理器")]),t._v(" "),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("window"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onload")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当DOM已经就绪并全部构建完成，就会触发这个事件")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("div",{staticClass:"language-js line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-js"}},[v("code",[t._v("document"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("body"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),v("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onclick")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),v("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 为在文档中body元素的单击事件注册处理器")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])])]),t._v(" "),v("li",[v("p",[t._v("通过使用内置 addEventListener 方法。"),v("strong",[t._v("推荐")]),t._v("，可以"),v("strong",[t._v("注册多个事件处理器")]),t._v("。")])])]),t._v(" "),v("h3",{attrs:{id:"处理事件"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#处理事件"}},[t._v("#")]),t._v(" 处理事件")]),t._v(" "),v("p",[t._v("事件处理背后的的主要思想是：当事件发生时，"),v("strong",[t._v("浏览器调用相应的事件处理器")]),t._v("。由于"),v("strong",[t._v("单线程执行模型")]),t._v("，所以"),v("strong",[t._v("同一时刻只能处理一个事件")]),t._v("。任何后面的事件都只能在当前事件处理器完全结束执行后才能被处理！")])])}),[],!1,null,null,null);s.default=n.exports}}]);