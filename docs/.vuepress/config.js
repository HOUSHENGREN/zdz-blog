module.exports = {
    base: '/zdz-blog/',
    title: "zdz's blogs",
    description: '博客',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
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
                path: '/screen/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "文字滚动", path: "/screen/scroll-text" },
                    { title: "demo", path: "/screen/demo" }
                ],
            },
            {
                title: "世界观",
                path: '/screen/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "谈学习", path: "/notes/2023-03-20" }
                ],
            }
        ]
    }
}