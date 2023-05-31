module.exports = {
    base: '/zdz-blog/',
    title: "zdz's blogs",
    description: '博客',
    theme: 'vuepress-theme-maker',
    // head: [
    //     ['link', { rel: 'icon', href: '/logo.jpg' }],
    //     ['link', { rel: 'manifest', href: '/manifest.json' }],
    //     ['meta', { name: 'theme-color', content: '#607d8b' }],
    //     ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    //     ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    //     ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    //     ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#607d8b' }],
    //     ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    //     ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    //     ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0' }]
    // ],
    // markdown: {
    //     lineNumbers: true,
    //     extractHeaders: [ 'h2', 'h3', 'h4' ],
    //     plugins: {
    //       'markdown-it-mark': true,
    //       'markdown-it-footnote': true,
    //       'markdown-it-abbr': true,
    //       'markdown-it-task-lists': true
    //     }
    //   },
    themeConfig: {
        logo: '/avatar.jpg',
        // Search 提示
        searchPlaceholder: 'Search',
        // Search 建议列表条目数
        searchMaxSuggestions: 10,
        nav: [
            { text: 'home', link: '/' },
            {
                text: 'about me',
                items: [
                    { text: 'Github', link: 'https://github.com/HOUSHENGREN' },
                    { text: '掘金', link: 'https://juejin.cn/user/1803631471367160' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎来到我的小木屋',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "小木屋", path: "/" }
                ]
            },
            {
                title: "大屏项目",
                path: '/screen/scroll-text',
                collapsable: false, // 不折叠
                children: [
                    { title: "文字滚动", path: "/screen/scroll-text" },
                    { title: "页面参数配置", path: "/screen/config-params" },
                    { title: "列表滚动/无缝滚动/定时翻页", path: "/screen/scroll-list" },
                    { title: "echart特殊效果实现", path: "/screen/echart01" }
                ],
            },
            {
                title: "开发经验",
                path: '/experience/print',
                collapsable: false, // 不折叠
                children: [
                    { title: "web打印表的实现", path: "/experience/print" },
                    { title: "文字滚动组件实现", path: "/experience/scroll-text" },
                    { title: "qr-code的二次封装", path: "/experience/qrcode" },
                    { title: "踩坑", path: "/experience/false" },
                ],
            },
            {
                title: "学习",
                path: '/study/ps',
                collapsable: false, // 不折叠
                children: [
                    { title: "PS-精修人像学习笔记", path: "/study/ps" },
                    { title: "Blender-学习笔记", path: "/study/blender" },
                    { title: "echart-学习笔记", path: "/study/echart" },
                    { title: "第一天 Blender操作 | 大帅老猿threejs特训", path: "/study/three/001" },
                    { title: "第二天 创建自己的展馆模型 | 大帅老猿threejs特训", path: "/study/three/002" },
                ],
            },
            {
                title: "面试",
                collapsable: false, // 不折叠
                children: [],
            },
            {
                title: "算法",
                path: '/algorithm/001',
                collapsable: false, // 不折叠
                children: [
                    { title: "对象数组去重", path: "/algorithm/001" },
                ],
            },
            {
                title: "高效开发",
                path: '/efficient/keyboard-man',
                collapsable: false, // 不折叠
                children: [
                    { title: "键盘侠-番外篇", path: "/efficient/keyboard-man" },
                    { title: "vscode中使用vim", path: "/efficient/vscode-vim" },
                    { title: "vscode插件及新电脑配置", path: "/efficient/vscode-config" },
                ],
            },
            {
                title: "世界观",
                path: '/notes/2023-03-20',
                collapsable: false, // 不折叠
                children: [
                    { title: "谈学习", path: "/notes/2023-03-20" },
                    { title: "0-1原则", path: "/notes/2023-03-26" },
                    { title: "及时止损", path: "/notes/2023-04-01" },
                ],
            }
        ],
        social: [
            {
              type: 'email',
              link: 'lid342490@gmail.com'
            },
            {
              type: 'github',
              link: 'HOUSHENGREN/zdz-blog'
            },
            {
              type: 'qq',
              link: '//qm.qq.com/cgi-bin/qm/qr?k=fknyQ434nkzVUWUmJ6rpIPctkS9eyQaZ&jump_from=webapi'
            },
            {
              type: 'feed',
              link: '/rss.xml'
            }
        ],
        themeConfig: {
            reward: {
              text: 'Buy me a cup of coffee ☕.',
              // 是否启用
              enable: true,
              ways: [
                {
                  name: 'wechat',
                  icon: 'wechat',
                  qrcode: '/images/wechat.png',
                  text: 'This is a Wechat Pay qrcode',
                  color: 'rgb(9, 187, 7)'
                },
                {
                  name: 'alipay',
                  symbol: 'alipay',
                  qrcode: '/images/alipay.png',
                  text: 'This is a Alipay Pay qrcode',
                  color: '#1296db'
                }
              ]
            },
        },
        blog: {
            directories: [
                {
                  id: 'post',
                  dirname: '_post',
                  path: '/',
                  itemPermalink: '/experience/:year/:month/:day/:slug.html',
                  pagination: {
                    perPagePosts: 10,
                  },
                }
            ],
            frontmatters: [
                {
                  id: "tag",
                  keys: ['tag', 'tags'],
                  path: '/tags/',
                  frontmatter: { title: 'Tag' },
                  pagination: {
                    lengthPerPage: 10
                  }
                },
                {
                  id: "category",
                  keys: ['category', 'categories'],
                  path: '/categories/',
                  frontmatter: { title: 'Category' },
                  pagination: {
                    lengthPerPage: 10
                  }
                }
            ],
        }
    }
}