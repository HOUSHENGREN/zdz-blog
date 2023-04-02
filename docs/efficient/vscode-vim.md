---
highlight: atelier-forest-dark
---

## 前言
本文是学习b站`薄涛TV`视频[EP16 - 切换 tab_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1z541177Jy?p=16&vd_source=9aab42de6453d89ff2a1518cbe145ee3)时的笔记。

## 一、vscode安装vim，搜索后直接安装就行，window安装后直接就能用
### 1.安装
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5b2e0ca15b22465dad9fffb498f47f5c~tplv-k3u1fbpfcp-watermark.image?)

### 2.加一下配置
~~~
{  
"vim.easymotion": true,  
"vim.incsearch": true,  
"vim.useSystemClipboard": true,  
"vim.useCtrlKeys": true,  
"vim.hlsearch": true,  
"vim.insertModeKeyBindings": [  
{  
"before": ["j", "j"],  
"after": ["<Esc>"]  
}  
],  
"vim.normalModeKeyBindingsNonRecursive": [  
{  
"before": ["<leader>", "d"],  
"after": ["d", "d"]  
},  
{  
"before": ["<C-n>"],  
"commands": [":nohl"]  
},  
{  
"before": ["K"],  
"commands": ["lineBreakInsert"],  
"silent": true  
}  
],  
"vim.leader": "<space>",  
"vim.handleKeys": {  
"<C-a>": false,  
"<C-f>": false  
}  
}
~~~

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ac6d815905414b358790030004cee420~tplv-k3u1fbpfcp-watermark.image?)
## 二、vim哲学

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3f2cc1a65e0c44f5828e6ca2ed8290b3~tplv-k3u1fbpfcp-watermark.image?)
## 三、模式
1.normal--普通模式
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1dd72e722ee442798f86a35cd706d4ee~tplv-k3u1fbpfcp-watermark.image?)
2.insert--插入模式
3.visual--可视模式
4.  :   --命令模式


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c7ac419a23a64a7987d76f59e004a2c4~tplv-k3u1fbpfcp-watermark.image?)

## normal--普通模式
- e   --- 去单词尾部
- b   --- 去单词头部
- o   --- 下方插入一行
- O   --- 上方插入一行
- ~   --- 切换大小写
- g~~ --- 切换当前行大小写
- g + d --- go to definition 去定义它的地方【十分好用】
- g + h --- go to hover 展示鼠标悬浮时显示的描述
- g + t --- go tag 【实用！！】 【类似于ctrl+tag】
- g + T --- go left tag  【实用！！】 【类似于ctrl+tag】 如下修改键位映射，也可
找到设置的normal... 添加如下

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/801a56cc1c40444f885580dca544c0f3~tplv-k3u1fbpfcp-watermark.image?)

在ctrl + shift + e 的基础上，点击l键，焦点可以去到右侧的文件

## 可视模式
用来获取选取。

可配合~让选取部分切换大小写

## easymotion
空格+空格+s【search】+n // 搜索单词n

空格+空格+find【find】+n // 搜索单词n

c【change】+s【surround】+'+" // 将包裹当前的单引号改为双引号 【很有用】

d【delete】+s【surround】+' // 删除包裹当前的单引号 【很有用】

一眼以蔽之： `inner 对应 surround，around 相当于 inner plus surround`

2022-12-20 经验之谈，点击v进入`virtual`模式，按住`h` `l`选中部分单词，此时，按住`y`发现，直接变成`normal`模式了，注意此时都不用再切换就已经是回`normal`模式了！这时，直接点`p`就能粘贴了。这就非常地人性化了！！！！

## 键位映射实现tab切换快捷键
略，有时间再补充

## 经验
我发现

ctrl + w + w 可以在左右分栏中切换

ctrl + 0 等价于 ctrl + shift + e【实用】

两种搜索方式的区别：搜索标签时，ctrl+shift+o，搜出一个，ctrl+f搜出两个

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/8516495c0e074b68bfe40d485ba8993d~tplv-k3u1fbpfcp-watermark.image?)

alt + leftArrow 去到左边的分页组 ；alt + rightArrow 去到右边的分页组【最近发现这个解释并不准确】

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/360387d616864af188e13ad9e1b9d181~tplv-k3u1fbpfcp-watermark.image?)

shift + \` 按出波浪号，就能切换大小写。

guu 当前行全部改为小写

gUU 当前行全部改为大写

### 中英文切换问题
可以使用rime输入法，可以diy输入法

## 发现的学习资料

https://github.com/alexzhang1030/full-keyboard/blob/main/docs/01_vim01.md