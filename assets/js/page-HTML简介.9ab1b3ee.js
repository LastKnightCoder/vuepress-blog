(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1082:function(t,a,s){"use strict";s.r(a);var n=s(15),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("HTML (Hyper Text Markup Language)，翻译为超文本标记语言，我们使用它来描述网页。所谓的超文本指的是不仅仅能够表示文字，还能够表示图片，音视频，以及超链接等等内容。我们使用下面形式的文本来表示网页")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("这是一个大标题"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("h1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("..."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("alt")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("其中 "),s("code",[t._v("h1")]),t._v(" 以及 "),s("code",[t._v("img")]),t._v(" 称为标签，"),s("code",[t._v("h1")]),t._v(" 表示一级标题，而 "),s("code",[t._v("img")]),t._v(" 表示一张图片，具体更多的标签会在后文介绍。")]),t._v(" "),s("h2",{attrs:{id:"开发工具"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发工具"}},[t._v("#")]),t._v(" 开发工具")]),t._v(" "),s("p",[t._v("工欲善其事，必先利其器。在开始真正的编写一个网页之前，必须先准备好工具：")]),t._v(" "),s("ol",[s("li",[t._v("浏览器")]),t._v(" "),s("li",[t._v("编辑器")])]),t._v(" "),s("p",[t._v("目前(2021-03)浏览器的使用占比")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting2/20210407235855.png",alt:"image-20210407235855288"}}),t._v(" "),s("p",[t._v("Chrome 浏览器的使用率名列前茅，第二名是 Safari，是苹果自家的浏览器，后面便是 Firefox 与 Edge。建议使用 Chrome 浏览器。")]),t._v(" "),s("p",[t._v("编辑器是编写代码的软件，写网页并没有要求一定要使用什么软件才能写，只要你的文件内容满足要求的格式，浏览器能够解析即可，所以使用记事本也是可以写出网页的。不过使用更好的软件可以让你写代码的更有效率，而且更少的出错率，这里推荐的编辑器是微软公式的软件 "),s("code",[t._v("Visual Studio Code")]),t._v("，简称 "),s("code",[t._v("VSCode")]),t._v("。")]),t._v(" "),s("blockquote",[s("p",[t._v("关于软件的使用可以自己摸索，或者直接上网搜索这是一个什么样的软件，以及如何使用。")])]),t._v(" "),s("h2",{attrs:{id:"html-文档的结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#html-文档的结构"}},[t._v("#")]),t._v(" HTML 文档的结构")]),t._v(" "),s("p",[t._v("浏览器可以将一个以 "),s("code",[t._v(".html")]),t._v(" 为后缀名的文件解析为一个页面，而浏览器要解析这个文件，这个文件必须要满足一定的格式才能被浏览器解析，所以我们就来讲 "),s("code",[t._v("html")]),t._v(" 文件需满足什么格式。")]),t._v(" "),s("p",[t._v("新建一个以 "),s("code",[t._v(".html")]),t._v(" 为后缀名的文件，例如 "),s("code",[t._v("index.html")]),t._v("，编写内容如下")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh-CN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("网页标题"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        Hello World!\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("上面是一个最简单的 "),s("code",[t._v("html")]),t._v(" 文件，他会在浏览器渲染出如下页面")]),t._v(" "),s("img",{staticStyle:{zoom:"50%"},attrs:{src:"https://cdn.jsdelivr.net/gh/LastKnightCoder/ImgHosting2/20210409212558.png",alt:"image-20210409212558071"}}),t._v(" "),s("p",[t._v("代码的第一行")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("是声明 "),s("code",[t._v("HTML")]),t._v(" 文件的版本的，"),s("code",[t._v("HTML")]),t._v(" 从提出到至今经历过很多的版本，对于不同的版本浏览器的解析规则也不尽相同，现在比较流行的版本是 "),s("code",[t._v("HTML5")]),t._v("，上面的这行代码表示的就是我们使用的是 "),s("code",[t._v("HTML5")]),t._v("，浏览器也会以对应的规则进行解析。")]),t._v(" "),s("p",[t._v("在文章的开头便有提及 "),s("code",[t._v("HTML")]),t._v(" 是一门标记语言，我们使用标签来表示页面的内容，标签直接可以互相嵌套，表示包含关系。一个 "),s("code",[t._v("HTML")]),t._v(" 文件有一个 "),s("code",[t._v("html")]),t._v(" 标签，"),s("code",[t._v("html")]),t._v(" 标签中包含两个标签 "),s("code",[t._v("head")]),t._v(" 与 "),s("code",[t._v("body")])]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[s("code",[t._v("head")]),t._v(" 标签用以描述网页的属性和信息，例如网页的标题、在 Web 中位置等等信息，在 "),s("code",[t._v("head")]),t._v(" 标签中的内容一般都不会显示在网页中，"),s("code",[t._v("head")]),t._v(" 标签中也可以包含标签，例如 "),s("code",[t._v("title")]),t._v(" 标签，它定义了网页的标题。")]),t._v(" "),s("p",[s("code",[t._v("body")]),t._v(" 标签中的内容会被显示在网页中，它也可以包含标签")]),t._v(" "),s("ul",[s("li",[t._v("a：超链接")]),t._v(" "),s("li",[t._v("p：段落")]),t._v(" "),s("li",[t._v("table：表格")]),t._v(" "),s("li",[t._v("...")])]),t._v(" "),s("p",[t._v("等等。")]),t._v(" "),s("h2",{attrs:{id:"注释"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注释"}},[t._v("#")]),t._v(" 注释")]),t._v(" "),s("p",[t._v("注释的作用就是为了解释代码的作用，当代码比较复杂的时候，很难一眼能够看明白这段代码是干什么的，所以需要对代码进行解释。对于注释的内容，浏览器是不会解析的，因为注释是为了让写代码的人理解代码。在 "),s("code",[t._v("HTML")]),t._v(" 文件中，在 "),s("code",[t._v("\x3c!-- --\x3e")]),t._v(" 中的内容就是注释内容")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[t._v(" ")]),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token doctype"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<!")]),s("span",{pre:!0,attrs:{class:"token doctype-tag"}},[t._v("DOCTYPE")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token name"}},[t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("lang")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("zh-CN"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("网页标题"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("title")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("head")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 这是注释，这里的内容不会被浏览器解析 --\x3e")]),t._v("\n        Hello World!\n    "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("body")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("html")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("Disqus")],1)}),[],!1,null,null,null);a.default=e.exports}}]);