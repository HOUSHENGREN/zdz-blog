module.exports = {
    base: '/zdz-blog/',
    title: "zdz's blogs",
    description: '博客',
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
            {
                text: 'zdz 的 JavaScript 博客',
                items: [
                    { text: 'Github', link: 'https://github.com/HOUSHENGREN' },
                    { text: '掘金', link: 'https://juejin.cn/user/1803631471367160' }
                ]
            }
        ],
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
                title: "基础学习",
                path: '/handbook/ConditionalTypes',
                collapsable: false, // 不折叠
                children: [
                    { title: "条件类型", path: "/handbook/ConditionalTypes" },
                    { title: "泛型", path: "/handbook/Generics" }
                ],
            }
        ]
    }
}