(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{978:function(t,s,a){"use strict";a.r(s);var e=a(1),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("在上面的简易入门中，我们没有为 "),a("code",[t._v("webpack")]),t._v(" 写配置文件，只是在命令行中设置了 "),a("code",[t._v("entry")]),t._v(" "),a("code",[t._v("output")]),t._v(" "),a("code",[t._v("mode")]),t._v(" 这些参数，但是其实这些参数都有默认值")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("entry")])]),t._v(" "),a("td",[a("code",[t._v("src/index.js")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("output")])]),t._v(" "),a("td",[a("code",[t._v("dist/main.js")])])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("mode")])]),t._v(" "),a("td",[a("code",[t._v("production")])])])])]),t._v(" "),a("p",[t._v("这意味着即使我们在命令行不配置这些参数，也能够进行正常的打包，会在 "),a("code",[t._v("dist")]),t._v(" 目录下生成一个 "),a("code",[t._v("main.js")]),t._v(" 文件而不是 "),a("code",[t._v("bundle.js")]),t._v(" 文件。所以可以说 "),a("code",[t._v("webpack")]),t._v(" 是零配置，不需要配置对用户来说是一件好事，可以减少很多的心智负担，但是零配置也意味着功能较弱，为了使用 "),a("code",[t._v("webpack")]),t._v(" 强大的功能，我们必须要学习 "),a("code",[t._v("webpack")]),t._v(" 许许多多的配置，但是这些配置都写在命令行中，那是十分的不方便，这些东西应该放在配置文件中。")]),t._v(" "),a("p",[a("code",[t._v("webpack")]),t._v(" 的默认配置文件名为 "),a("code",[t._v("webpack.config.js")]),t._v(" 或者 "),a("code",[t._v("webpackfile.js")]),t._v("，由于业界大多数使用的都是 "),a("code",[t._v("webpack.config.js")]),t._v("，所以我们在这里也使用 "),a("code",[t._v("webpack.config.js")]),t._v("。在项目的根目录(而不是 "),a("code",[t._v("src")]),t._v(" 目录)下新建 "),a("code",[t._v("webpack.config.js")]),t._v("，内容如下")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"bundle.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"development"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这时我们就不必在命令行中指定参数了，我们修改 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("script")]),t._v(" 字段如下")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"scripts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"build"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"webpack"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("接着在命令行运行 "),a("code",[t._v("npm run build")]),t._v(" 即可看到打包成功的消息。下面就更加详细的讲解一下 "),a("code",[t._v("entry")]),t._v(" 和 "),a("code",[t._v("output")]),t._v(" 的配置。")]),t._v(" "),a("h3",{attrs:{id:"entry"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#entry"}},[t._v("#")]),t._v(" entry")]),t._v(" "),a("p",[a("code",[t._v("entry")]),t._v(" 指代的就是入口文件，这是我们在上面就已经介绍过的。其实 "),a("code",[t._v("entry")]),t._v(" 可以有多个入口，"),a("code",[t._v("webpack")]),t._v(" "),a("code",[t._v("webpack")]),t._v(" 会根据每一个入口文件打包出一个 "),a("code",[t._v("chunk")])]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/lastknightcoder/blogimage/raw/master/20200718152109.png"}}),t._v(" "),a("p",[t._v("这个 "),a("code",[t._v("chunk")]),t._v(" 可以有名字，当如下配置时")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),t._v("\n")])])]),a("p",[t._v("打包出的 "),a("code",[t._v("chunk")]),t._v(" 的名字默认为 "),a("code",[t._v("main")]),t._v("。我们也可以使用对象的方式配置 "),a("code",[t._v("chunk")]),t._v(" 的名字")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    index"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"./src/index.js"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// index 表示 chunk 名字，对应的值表示对应的入口文件")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\noutput"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name].js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])]),a("p",[t._v("在上面有两处改动，第一个就是将 "),a("code",[t._v("entry")]),t._v(" 的值设置为了一个对象，该对象的值表示入口文件，而键表示入口文件打包后的 "),a("code",[t._v("chunk")]),t._v(" 的名字；第二个改动就是在 "),a("code",[t._v("output")]),t._v(" 中我们设置打包后的文件名称为 "),a("code",[t._v("[name].js")]),t._v("，这个 "),a("code",[t._v("[name]")]),t._v(" 是一个变量，指的就是 "),a("code",[t._v("chunk")]),t._v(" 的名字，我们没有手动的写死一个值，而是使打包后的文件名与 "),a("code",[t._v("chunk")]),t._v(" 名字相同，所以此时运行 "),a("code",[t._v("npm run build")]),t._v(" 可以在 "),a("code",[t._v("dist")]),t._v(" 目录下打包出 "),a("code",[t._v("index.js")]),t._v(" 文件。下面是运行打包命令在命令行的输出")]),t._v(" "),a("img",{attrs:{src:"https://gitee.com/lastknightcoder/blogimage/raw/master/20200718150150.png",width:"80%"}}),t._v(" "),a("h3",{attrs:{id:"output"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output"}},[t._v("#")]),t._v(" output")]),t._v(" "),a("p",[a("code",[t._v("output")]),t._v(" 的常见配置选项如下")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("选项")]),t._v(" "),a("th",[t._v("功能")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[a("code",[t._v("filename")])]),t._v(" "),a("td",[t._v("指定文件名称，可以为 "),a("code",[t._v("[name]")]),t._v(" "),a("code",[t._v("[chunkHash]")]),t._v(" 以及它们的组合")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("path")])]),t._v(" "),a("td",[t._v("打包后的文件放置的路径")])]),t._v(" "),a("tr",[a("td",[a("code",[t._v("publicPath")])]),t._v(" "),a("td")])])]),t._v(" "),a("p",[a("code",[t._v("filename")]),t._v(" 是用来指定打包后的文件名的，我们除了可以指定特定的名称如 "),a("code",[t._v("bundle.js")]),t._v(" 外，还可以使用 "),a("code",[t._v("[name]")]),t._v(" "),a("code",[t._v("[chunkHash]")]),t._v(" 等变量，分别指打包后的 "),a("code",[t._v("chunk")]),t._v(" 的名称和打包后文件内容计算出的 "),a("code",[t._v("hash")]),t._v(" 值。二者可以进行组合使用，如")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name][chunkHash].js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("Disqus")],1)}),[],!1,null,null,null);s.default=n.exports}}]);