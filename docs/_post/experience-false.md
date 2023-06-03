---
date: 2022-10-11
title: 踩坑记录
category: experience
cover: /mdImages/001.webp
tags:
  - Vue
  - JavaScript
---

> 一些易错及特殊问题的踩坑记录

# 反斜杠的特殊性，会出现意想不到的结果。
当url有反斜杠时最恶心。
```
'1112221'.replace(/111/, '\')

'1112221'.replace(/111/, '\\')

console.log(54648, '1112221'.replace(/111/, '\\'))

'\\'.length

'\'.length

'\\'.slice(1)
```

url有特殊符号时，如何获取url的数据？


# array 转对象
可以将数组并入对象
```
{
    ...[2,3,4],
    b: 'ij'
}
```
开发案例，vxe实现动态列

# 二维数组列求和
这是在实际开发中遇到的问题

```
const arr = [
    [{weight: 2, length: 7}, {weight: 3, length: 2}, {weight: 4, length: 7}],
    [{weight: 4, length: 5}, {weight: 4, length: 5}],
    [{weight: 6, length: 9}, {weight: 8, length: 4}, {weight: 2, length: 5}],
    [{weight: 1, length: 3}],
]

1.要求得到一个数组【列求和】
    [{weight: 13, length: 24}, {weight: 15, length: 11}, {weight: 6, length: 12}],
2.要求得到一个数组【行求和】
    [
        {weight: 9, length: 16}, 
        {weight: 8, length: 10}, 
        {weight: 16, length: 18}, 
        {weight: 1, length: 3}
    ],
```

行求和简单点，大家能想出很多办法。我说下我的思路：arr.map(i => 里面reduce 求和 )

列求和如何实现，我的想法是搞个空数组，arr两层循环

```
const Arr = []
arr.forEach((item, index) => {
    item.forEach(inItem, inIndex) => {
        if(!Arr[inIndex]) {
            Arr[inIndex] = {}
        }
        Arr[inIndex].weight =  (+Arr[inIndex].weight || 0) + (+inItem.weight || 0)
        Arr[inIndex].length =  (+Arr[inIndex].length || 0) + (+inItem.length || 0)
    })
})
```

# 函数的length就是接受参数的个数

```
((a, b, c) => {}).length // 3
```

# 列表通常会有个全部，这个功能要如何实现
每次fetch到数据后，unshift()进一个`全部`
```
this.list = res.data.data
this.list.unshift({
    name: '全部',
    id: 'all'
})
```

# 一个组件复用技巧
通过判断当前的route是哪里过来的，对应做处理。具体案例：页面的新增页和编辑页通常很像，这时就可以利用route判断实现复用。

# vuex持久化
需要借助localstorage

# v-for 可以遍历对象
很多人忽略了这一点。

# vscode 隐藏提示
如图，不想要提示时，按下alt就能隐藏提示内容
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bbef75c8e19a4f5f822224f138c18f36~tplv-k3u1fbpfcp-watermark.image?)

# 善用伪元素
实现类似border的竖线，四角的框线。利用子绝父相实现，注意这里子是伪元素，父是当前元素！

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab624fcba0944675a595779298bbe42e~tplv-k3u1fbpfcp-watermark.image?)

# package.lock.json是否可以删除? 【package-lock.json 需要提交到仓库吗？】
以下摘自https://juejin.cn/post/7137110113277444126 苏苏同学

至于我们要不要提交 **lockfiles** 到仓库中？这个就需要看我们具体的项目的定位了。

1.  如果是开发一个应用, 我的理解是 `package-lock.json`文件提交到代码版本仓库.这样可以保证项目中成员、运维部署成员或者是 CI 系统, 在执行 `npm install`后, 保证在不同的节点能得到完全一致的依赖安装的内容，减少`bug`的出现。
1.  如果你的目标是开发一个给外部环境用的库，那么就需要认真考虑一下了, 因为**库文件一般都是被其他项目依赖的，在不使用 package-lock.json的情况下，就可以复用主项目已经加载过的包，减少依赖重复和体积**
1.  如果说我们开发的库依赖了一个精确版本号的模块，那么在我们去提交 `lockfiles` 到仓库中可能就会出现, 同一个依赖被不同版本都被下载的情况，这样加大了`node_modules`的体积。如果我们作为一个库的开发者， 其实如果真的使用到某个特定的版本依赖的需求, 那么定义**peerDependencies** 是一个更好的选择。

所以, 我个人比较推荐的一个做法是:`把 package-lock.json`一起提交到仓库中去, 不需要 `ignore`。但是在执行 `npm publish` 命令的时候,也就是发布一个库的时候, 它其实应该是被忽略的不应该被发布出去的。

# vscode 搜索时，设置大小写很有用
我在做迁移项目时，同事迁移代码是改了大小写，当时没注意到这个问题，不好找bug。datacollect.js => dataCollect.js
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/13d4fd5db7124c8abcc8ae350e0494e5~tplv-k3u1fbpfcp-watermark.image?)

# css中使用~@

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d27231d050ce46d9b85fb296e2707ae9~tplv-k3u1fbpfcp-watermark.image?)

# typory收费后的替代品=》markText

[(14条消息) Typora免费版，不是破解版，是没有升级的老版本，用的还是比较舒服的_我名异侠的博客-CSDN博客](https://blog.csdn.net/qq_44627608/article/details/121734682) --“兄弟们0407的可以用”

[Releases · chinayangxiaowei/marktext-chinese-language-pack (github.com)](https://github.com/chinayangxiaowei/marktext-chinese-language-pack/releases)

# npm install 安装依赖包 --save、--save-dev、-S、-D的区别

--save-dev：仅开发时用到，打正式包会被去掉=》开发时依赖
--save：不仅开发，生产环境也需要。开发时和打生产包时都需要=》运行时依赖

详情[(14条消息) npm install 安装依赖包 --save、--save-dev、-S、-D的区别_清颖~的博客-CSDN博客](https://blog.csdn.net/aaqingying/article/details/101371352)

# 拉起别人项目，如何能保存时自动使用该项目的eslint规则，以避免提交代码时，pre-commit检测到不符合要求而禁止提交
```
    // #每次保存的时候自动格式化
    // "editor.formatOnSave": true, // 不启用，编辑器格式化的方式可能采取了别的方法=》vetur等
    // #每次保存的时候将代码按eslint格式进行修复=》读取.eslintrc.js的个性化配置 + eslint原有配置
    // "eslint.autoFixOnSave": true, // 此配置过时
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
    },
    // 添加 vue 支持
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "vue",
        // "autoFix": true是默认开启的，不需要下面这样设置
        // {
        // "language": "vue",
        // "autoFix": true
        // }
    ]
```
    
    
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a2dfdf703720412982d312e0572cd850~tplv-k3u1fbpfcp-watermark.image?)

# 浏览器打开新窗口
```
    print1() {
      const { href } = this.$router.resolve({
        path: '/print-files/oder-plan-v3',
        query: {
          test: '555',
          id: '555587975'
        }
      })
      window.open(href, '_blank')
    }
```

# vue2 实现定时缓存数据。当用户输入数据了，此时页面刷新，仍能看到用户刚刚输入的数据
~~~
created() {
    const data = window.localstorage.getItem('testData')
    if(data) {
        Object.assign(this, data)
    }
    setInterval(_ => {
        window.localstorage.setItem('testData', JSON.stringify(this)
    })
},
~~~

# 接手了同事代码，同事代码线上有bug，本地如何debug
可以利用sourceMap，修改值，实现bug精确定位。

为啥有这个想法，是因为又有一次，接手的同事代码报错，浏览器只提示id是undefined，去报错页面一搜，发现用的地方还挺多。

# 接手了同事代码，要修改、添加新功能，如何避坑

## 数组
数组用splice等方法，不要JSON.parse(JSON.stringify(xx))去修改引用。对象同理。

## 加备注
~~~
// 2.3.0 新增 start
// 2.3.0 新增 end
~~~
## 特殊条件下才有的内容
vif可插拔
~~~
v-if="isAgent"
~~~
## 善用数组的reduce
求和。此外，提示下，数组reduce后可以返回对象、数组。