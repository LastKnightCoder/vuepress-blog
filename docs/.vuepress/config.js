const {
    config
} = require('vuepress-theme-hope');

const sidebar = require('./sidebar');
const nav = require('./nav');

module.exports = config({
    title: "Coder",
    description: "操千曲而后晓声，观千剑而后识器",
    markdown: {
        extendMarkdown: md => {
            md.set({
                html: true
            })
            md.use(require('markdown-it-katex'))
        }
    },
    themeConfig: {
        author: '熊滔',
        sidebar,
        nav,
        mdEnhance: {
            align: true,
            flowchart: true,
            tex: false,
            lineNumbers: false,
            demo: true
        },
        iconPrefix: "icon-"
    },
    plugins: [
        "@vuepress/nprogress",
        "vuepress-plugin-viewer",
        ['disqus', {
            shortname: 'lastknightcoder'
        }],
        "code-switcher"
    ],
    base: '/vuepress-blog/',
    head: [
        ['link', {
            rel: 'stylesheet',
            href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css'
        }],
        ['link', {
            rel: "stylesheet",
            href: "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/2.10.0/github-markdown.min.css"
        }]
    ]
})