(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{935:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("防抖与节流是两个出于性能考虑提出的概念，如果在短时间内多次触发同一函数，可能会产生页面的卡顿，以及性能的降低，针对这种情况，提出了防抖与节流两个解决方案。")]),t._v(" "),a("h2",{attrs:{id:"防抖与节流的概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖与节流的概念"}},[t._v("#")]),t._v(" 防抖与节流的概念")]),t._v(" "),a("p",[t._v("为了解释如上的两个概念，我们以一个例子开始。有一个搜索框，当用户输入搜索内容时，会同时向后端发起请求，给出相近的词条以给用户提示")]),t._v(" "),a("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting2/20210430214859.png",alt:"image-20210429232147448"}}),t._v(" "),a("p",[t._v("如果当每次用户输入一个字符都向都端发起一个请求，那么发起请求的次数就太频繁了，这时有两种策略：")]),t._v(" "),a("ol",[a("li",[t._v("当用户停止输入一段时间后，例如 500ms，我们向后端发起一个请求")]),t._v(" "),a("li",[t._v("每隔固定的时间向后端发起一个请求")])]),t._v(" "),a("p",[t._v("第一种策略我们叫做防抖，第二种策略我们称为节流。")]),t._v(" "),a("p",[t._v("有一个形象的比喻，以公交车发车为例，有两种发车方案：")]),t._v(" "),a("ol",[a("li",[t._v("当乘客上车后，如果经过一段时间没有乘客上车了，就发车")]),t._v(" "),a("li",[t._v("发车时间固定，每隔一段时间发一次车")])]),t._v(" "),a("p",[t._v("我们将发车比喻为向后端发起一个请求，那么这两种发车的策略就分别对应为防抖和节流。")]),t._v(" "),a("h2",{attrs:{id:"防抖实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#防抖实现"}},[t._v("#")]),t._v(" 防抖实现")]),t._v(" "),a("p",[t._v("我们要实现一个 "),a("code",[t._v("debounce")]),t._v(" 函数，该函数接收一个函数以及时间，返回一个函数，"),a("code",[t._v("debounce")]),t._v(" 函数的作用就是将一个普通的函数变为防抖的函数，即多次调用该函数，只有经过指定时间后，函数才会触发"),a("strong",[t._v("一次")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("debounce")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" timerId\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clearTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("timerId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        timerId "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTimeout")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("上面有几个注意事项：")]),t._v(" "),a("ul",[a("li",[a("p",[a("code",[t._v("timerId")]),t._v(" 要放在返回的函数之外，形成闭包，以确保每次调用函数时访问的是同一个 "),a("code",[t._v("timerId")])])]),t._v(" "),a("li",[a("p",[t._v("返回的函数不要写成箭头函数的形式")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不要写成这样")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("因为这样会丢失 "),a("code",[t._v("this")])])]),t._v(" "),a("li",[a("p",[t._v("最后要通过 "),a("code",[t._v("apply")]),t._v(" 方法将 "),a("code",[t._v("this")]),t._v(" 传入")])])]),t._v(" "),a("h2",{attrs:{id:"节流实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节流实现"}},[t._v("#")]),t._v(" 节流实现")]),t._v(" "),a("p",[t._v("我们要实现一个 "),a("code",[t._v("throttle")]),t._v(" 函数，该函数的作用是将一个普通函数转化为节流函数，也接收两个参数，第一个参数为函数，第二个函数为时间，当多次调用该函数，在一段时间内只能触发一次")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("throttle")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("fn"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("now")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("now "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apply")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            pre "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" now"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("pre")]),t._v(" 表示上一次执行的时间，默认值为 "),a("code",[t._v("0")]),t._v("，这样第一次调用该函数时会立即执行该函数。每次执行函数时，判断距上次执行已经经过的时间 "),a("code",[t._v("Date.now() - start")]),t._v(" 是否大于设定的时间，大于则执行，小于则不执行，以达到节流的目的，执行函数后，设置 "),a("code",[t._v("pre")]),t._v(" 为当前函数执行时的时刻。")]),t._v(" "),a("blockquote",[a("p",[t._v("返回的函数不能写为箭头函数，同样是因为会丢失 "),a("code",[t._v("this")]),t._v("。")])]),t._v(" "),a("Disqus")],1)}),[],!1,null,null,null);s.default=e.exports}}]);