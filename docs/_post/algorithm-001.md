---
date: 2022-11-06
title: 对象数组去重
category: algorithm
cover: /mdImages/005.webp
tags:
  - VuePress
---

昨天的工作中遇到这个问题，一开始想能不能用Set集合解决，然后觉得不大行，因为对象是引用类型不是值类型，所以纠结了一下，用了一个比较啰嗦的方法。如下
~~~
// 需要去重掉test值相同的项
const arr = [
    {
        test: 'hh',
        name: 'john'
    },
    {
        test: 'hh1',
        name: 'amy'
    },
    {
        test: 'hh2',
        name: 'lucy'
    },
     {
        test: 'hh',
        name: 'bob'
    },
]
~~~

当时我是这么处理的
~~~
const list = []
const arrFilter = []
arr.forEach(i => {
    !list.includes(i.test) && list.push(i.test) && arrFilter.push(i)
})
~~~

思来想去，感觉用了两个数据有点麻烦，应该有更简单的方法。于是百度一番。发现用Map可以快速解决，如下
~~~
const map = new Map()
const arrFilter = arr.filter(i => !map.has(i.test) && map.set(i.test, 1))
~~~

又看了一些方法，我觉得可以改进下我的方法，用hash对象替代我的list数组，reduce替代for循环。代码如下
~~~
const listObj = {}
arr.reduce((arrFilter, i) => {
    !listObj[i.test] && (listObj[i.test]=true) && arrFilter.push(i)
    return arrFilter
}, [])
~~~
