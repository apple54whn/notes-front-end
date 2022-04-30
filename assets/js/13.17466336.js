(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{572:function(s,t,a){s.exports=a.p+"assets/img/image-20220129221320337.f455119d.png"},573:function(s,t,a){s.exports=a.p+"assets/img/image-20220129224726897.1cf05755.png"},574:function(s,t,a){s.exports=a.p+"assets/img/image-20220129230031463.66f90064.png"},757:function(s,t,a){"use strict";a.r(t);var e=a(21),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"vite"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite"}},[s._v("#")]),s._v(" Vite")]),s._v(" "),e("h2",{attrs:{id:"介绍"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[s._v("#")]),s._v(" 介绍")]),s._v(" "),e("p",[s._v("Webpack是目前整个前端使用最多的构建工具，但是除了webpack之后也有其他的一些构建工具：如rollup、parcel、gulp、vite等")]),s._v(" "),e("p",[s._v("vite官方的定位:"),e("strong",[s._v("下一代前端开发与构建工具")])]),s._v(" "),e("p",[s._v("如何定义下一代开发和构建工具呢？")]),s._v(" "),e("ul",[e("li",[s._v("我们知道在实际开发中，我们编写的代码往往是不能被浏览器直接识别的，比如ES6、TypeScript、Vue文件等 等;")]),s._v(" "),e("li",[s._v("所以我们必须通过构建工具来对代码进行转换、编译，类似的工具有webpack、rollup、parcel;")]),s._v(" "),e("li",[s._v("但是随着项目越来越大，需要处理的JavaScript呈指数级增长，模块越来越多;")]),s._v(" "),e("li",[s._v("构建工具需要很长的时间才能开启服务器，HMR也需要几秒钟才能在浏览器反应出来;")]),s._v(" "),e("li",[s._v("所以也有这样的说法：天下苦webpack久矣;")])]),s._v(" "),e("p",[s._v('Vite (法语意为 "快速的"，发音 /vit/) 是一种新型前端构建工具，能够显著提升前端开发体验')]),s._v(" "),e("h2",{attrs:{id:"构造"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构造"}},[s._v("#")]),s._v(" 构造")]),s._v(" "),e("p",[s._v("它主要由两部分组成:")]),s._v(" "),e("ul",[e("li",[s._v("一个开发服务器，它基于原生ES模块提供了丰富的内建功能，HMR的速度非常快速;")]),s._v(" "),e("li",[s._v("一套构建指令，它使用"),e("strong",[s._v("rollup")]),s._v("打开我们的代码，并且它是预配置的，可以输出生成环境的优化过的静态资源")])]),s._v(" "),e("p",[s._v("目前是否要大力学习vite?vite的未来是怎么样的?")]),s._v(" "),e("ul",[e("li",[s._v("我个人非常看好vite的未来，也希望它可以有更好的发展;")]),s._v(" "),e("li",[s._v("但是，目前vite虽然已经更新到2.0，依然并不算非常的稳定，并且比较少大型项目(或框架)使用vite来进行 构建;")]),s._v(" "),e("li",[s._v("vite的整个社区插件等支持也还不够完善;")]),s._v(" "),e("li",[s._v("包括vue脚手架本身，目前也还没有打算迁移到vite，而依然使用webpack(虽然后期一定是有这个打算的);")]),s._v(" "),e("li",[s._v("所以vite看起来非常的火热，在面试也可能会问到，但是实际项目中应用的还比较少;")])]),s._v(" "),e("h2",{attrs:{id:"浏览器原生支持模块化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浏览器原生支持模块化"}},[s._v("#")]),s._v(" 浏览器原生支持模块化")]),s._v(" "),e("p",[e("img",{attrs:{src:a(572),alt:"image-20220129221320337"}})]),s._v(" "),e("p",[s._v("但是如果我们不借助于其他工具，直接使用ES Module来开发有什么问题呢?")]),s._v(" "),e("ul",[e("li",[s._v("首先，我们会发现在使用loadash时，加载了上百个模块的js代码，对于浏览器发送请求是巨大的消耗;")]),s._v(" "),e("li",[s._v("其次，我们的代码中如果有TypeScript、less、vue等代码时，浏览器并不能直接识别;")])]),s._v(" "),e("p",[s._v("事实上，vite就帮助我们解决了上面的所有问题")]),s._v(" "),e("h2",{attrs:{id:"安装和使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装和使用"}},[s._v("#")]),s._v(" 安装和使用")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vite –g "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 全局安装 ")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" vite –D "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 局部安装")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("通过vite来启动项目")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" npx vite\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"vite对css的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite对css的支持"}},[s._v("#")]),s._v(" Vite对css的支持")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("vite可以直接支持css的处理，直接js中导入css即可")])]),s._v(" "),e("li",[e("p",[s._v("vite可以直接支持css预处理器，比如less，js中直接导入less")]),s._v(" "),e("p",[s._v("安装less编译器")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("less")]),s._v(" -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("vite直接支持postcss的转换")]),s._v(" "),e("p",[s._v("只需要安装postcss，并且配置 postcss.config.js 的配置文件即可")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" postcss postcss-preset-env -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[s._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"postcss-preset-env"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])])])]),s._v(" "),e("h2",{attrs:{id:"vite对typescript的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite对typescript的支持"}},[s._v("#")]),s._v(" Vite对TypeScript的支持")]),s._v(" "),e("p",[s._v("vite对TypeScript是原生支持的，它会直接使用ESBuild来完成编译。只需要直接导入即可")]),s._v(" "),e("p",[s._v("如果我们查看浏览器中的请求，会发现请求的依然是ts的代码")]),s._v(" "),e("ul",[e("li",[s._v("这是因为vite中的服务器Connect会对我们的请求进行转发")]),s._v(" "),e("li",[s._v("获取ts编译后的代码，给浏览器返回，浏览器可以直接进行解析")])]),s._v(" "),e("p",[s._v("注意:在vite2中，已经不再使用Koa了，而是使用Connect来搭建的服务器")]),s._v(" "),e("h2",{attrs:{id:"vite对vue的支持"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite对vue的支持"}},[s._v("#")]),s._v(" Vite对vue的支持")]),s._v(" "),e("p",[s._v("vite对vue提供第一优先级支持:")]),s._v(" "),e("ul",[e("li",[s._v("Vue 3 单文件组件支持:@vitejs/plugin-vue")]),s._v(" "),e("li",[s._v("Vue 3 JSX 支持:@vitejs/plugin-vue-jsx")]),s._v(" "),e("li",[s._v("Vue 2 支持:underfin/vite-plugin-vue2")])]),s._v(" "),e("p",[s._v("安装支持vue的插件")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vitejs/plugin-vue -D\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在vite.config.js中配置插件")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("const")]),s._v(" vue "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("require")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'@vitejs/plugin-vue'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nmodule"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("exports "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token literal-property property"}},[s._v("plugins")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("vue")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h2",{attrs:{id:"vite打包项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite打包项目"}},[s._v("#")]),s._v(" Vite打包项目")]),s._v(" "),e("p",[s._v("我们可以直接通过vite build来完成对当前项目的打包工具")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" npx vite build\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[e("img",{attrs:{src:a(573),alt:"image-20220129224726897"}})]),s._v(" "),e("p",[s._v("我们可以通过preview的方式，开启一个本地服务来预览打包后的效果：")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" npx vite preview\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("在package.json 中配置")]),s._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"scripts"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"serve"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vite"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"build"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vite build"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[s._v('"preview"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"vite preview"')]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h2",{attrs:{id:"esbuild-解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esbuild-解析"}},[s._v("#")]),s._v(" ESBuild 解析")]),s._v(" "),e("h3",{attrs:{id:"esbuild-特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esbuild-特点"}},[s._v("#")]),s._v(" ESBuild 特点")]),s._v(" "),e("ul",[e("li",[s._v("超快的构建速度，并且不需要缓存;")]),s._v(" "),e("li",[s._v("支持ES6和CommonJS的模块化;")]),s._v(" "),e("li",[s._v("支持ES6的Tree Shaking（删除未使用的代码）;")]),s._v(" "),e("li",[s._v("支持Go、JavaScript的API;")]),s._v(" "),e("li",[s._v("支持TypeScript、JSX等语法编译;")]),s._v(" "),e("li",[s._v("支持SourceMap;")]),s._v(" "),e("li",[s._v("支持代码压缩;")]),s._v(" "),e("li",[s._v("支持扩展其他插件;")])]),s._v(" "),e("h3",{attrs:{id:"esbuild的构建速度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esbuild的构建速度"}},[s._v("#")]),s._v(" ESBuild的构建速度")]),s._v(" "),e("p",[s._v("ESBuild的构建速度和其他构建工具速度对比:")]),s._v(" "),e("p",[e("img",{attrs:{src:a(574),alt:"image-20220129230031463"}})]),s._v(" "),e("p",[s._v("ESBuild为什么这么快呢?")]),s._v(" "),e("ul",[e("li",[s._v("使用Go语言编写的，可以"),e("strong",[s._v("直接转换成机器代码")]),s._v("，而无需经过字节码;")]),s._v(" "),e("li",[s._v("ESBuild可以充分利用CPU的多内核，尽可能让它们饱和运行;")]),s._v(" "),e("li",[s._v("ESBuild的所有内容都是从零开始编写的，而不是使用第三方，所以从一开始就可以考虑各种性能问题;")]),s._v(" "),e("li",[s._v("等等....")])]),s._v(" "),e("h2",{attrs:{id:"vite-脚手架工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite-脚手架工具"}},[s._v("#")]),s._v(" Vite 脚手架工具")]),s._v(" "),e("p",[s._v("在开发中，我们不可能所有的项目都使用vite从零去搭建，比如一个react项目、Vue项目; 这个时候vite还给我们提供了对应的脚手架工具")]),s._v(" "),e("p",[s._v("所以Vite实际上是有两个工具的:")]),s._v(" "),e("ul",[e("li",[s._v("vite:相当于是一个构件工具，类似于webpack、rollup;")]),s._v(" "),e("li",[s._v("@vitejs/create-app:类似vue-cli、create-react-app;")])]),s._v(" "),e("p",[s._v("如果使用脚手架工具呢?")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  如下2种方式都可以，官方文档是第1个")]),s._v("\n "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" create vite@latest\n \n "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# npm init @vitejs/app")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("第一种做法相当于省略了安装脚手架的过程:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @create-vite@latest\ncreate-app\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("第二种做法相当于省略了安装脚手架的过程:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" @vitejs/create-app -g\ncreate-app\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);