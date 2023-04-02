---
theme: devui-blue
---
## 前言
[vscode键盘侠养成记](https://juejin.cn/post/6844904099880632328)对我帮助很大，只用键盘盲打vscode帅呆了好吧🤩！下面内容是本人基于此、结合个人经验的扩展。希望对想成为键盘侠的各位有所作用。

## 盲打
我前段时间看同事打字贼快，不免羡慕，于是想我能不能行？经过一番摸索，我觉得我学会了。下面我探索出了盲打的一条可行道路，说起来简单，勤加练习，你也可以！😘
-  🍔 金山打字通练一下手指的摆放位置，熟悉之后，用keybr.com练习打单词，全部通过后，就基本练成了，之后要做的就是在实践中多加练习，慢慢就能掌握盲打的奥秘。

## vscode

🍓 ctrl + d 可以选中鼠标所在位置的单词

设置聚焦到终端的快捷键 alt + t 【([vscode各个窗口的聚焦(快捷键)/文件列表定位/快速打开工作区的文件/快捷键注释弃用_xuchaoxin1375的博客-CSDN博客](https://blog.csdn.net/xuchaoxin1375/article/details/112059873))】

2022-11-02 补充 [扩展](https://blog.csdn.net/weixin_46655235/article/details/121788623)

2022-12-06 补充
-  ctrl + u 可以撤销鼠标的位置，让鼠标去到上一次鼠标所在位置 【大文件中上下切换时十分有用】
-  ctrl + d 可以选中当前鼠标的位置的单词，让鼠标去多选到下一个该单词所在位置 【大文件中上下切换时十分有用】
-  [Open Markdown preview](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_open-markdown-preview) In a Markdown file, use keyboard Shortcut: Ctrl+Shift+V 【vscode 预览markdown文件】
-  [Transform text commands](https://code.visualstudio.com/docs/getstarted/tips-and-tricks#_transform-text-commands) You can change selected text to uppercase, lowercase, and title case with the **Transform** commands
-  ctrl + shift + c 用cmd打开当前项目所在目录
-  alt + shift + r 打开当前文件所在目录
-  ctrl + shift + e 聚焦到左边文件目录，此时点击m则会去到目录首字母为m的文件/目录，如果是shift + m则可以往前找。
-  ctrl + , 可以打开设置的搜索框，便于快速搜索设置【如想在vscode保存时使用eslint的规则，可以搜`editor.codeActionsOnSave`，添加下面的代码
```
        // 使用eslint来fix，包括格式化会自动fix和代码质量检查会给出错误提示
        "source.fixAll.eslint": true
```


## vim 操作
🍍 git终端，输入 vim + 文件名。即可打开对应文件。略，有时间再补充。

2022-12-08 [补充](https://juejin.cn/post/7174751732835680293) 

## git bash
粘贴： **鼠标中键**

## 浏览器
打开新的标签页，并跳转到该标签页：**Ctrl + t**

打开新窗口：**Ctrl + n**

在新的后台标签页中打开链接：按住 **Ctrl** 键的同时点击链接

在新窗口中打开链接：按住 **Shift** 键的同时点击链接

跳转到下一个打开的标签页**Ctrl + Tab**

跳转到上一个打开的标签页**Ctrl + Shift + Tab**

关闭当前标签页**Ctrl + w**

关闭当前窗口**Ctrl + Shift + w**

复制当前标签页**Ctrl + Shift + k** 【这个好用】

在新标签页中打开“历史记录”页**Ctrl + h** 【这个好用】

在新标签页中打开“下载内容”页**Ctrl + j** 【这个好用】

将焦点移到未聚焦的对话框（如果显示）或所有工具栏**F6或Alt+d** 【这个好用】

打开查找栏搜索当前网页**Ctrl + f**

跳转到与查找栏中搜索字词相匹配的下一条内容**Ctrl + g** 【这个好用】

跳转到与查找栏中搜索字词相匹配的上一条内容**Ctrl + Shift + g** 【这个好用】

恢复上次关闭的标签页或标签组，可以一直按这个快捷键**Ctrl + Shift + t** 【谷歌浏览器】

## 电脑快捷键
桌面软件搜索 按win，等win菜单展开后，再ctrl + f。可以尝试搜一下WeChat。 【这个好用】

WIN+E 我的电脑【这个好用】

WIN+R 运行Windows对话框（打开应用程序，设置自动关机等）

WIN+P 设置投影、扩展屏

WIN+方向键 最大最小化窗口，左右半屏【这个好用】

WIN+数字 打开任务栏指定序号的应用

WIN+TAB 显示全部打开应用的界面

ALT+TAB 逐个应用窗口切换

CTRL+TAB 应用内切换窗口

F2 重命名

F6 定位网页内地址栏【这个好用】

鼠标前后键 上层目录下层目录

## 习惯
### 改变一些按键习惯，提升按键定位能力。不用按完按键后还需要疯狂找fj位置。【大佬除外哈】
-  🌽 ***ctrl + z、ctrl + x、ctrl + c、ctrl + v*** 这些按键之前习惯用左手同时按，现在可以改为 左手按***z x c v***,右手按***ctrl***。这样还能找回之前的f j 的位置，以前的习惯会容易再做一次找回***f j***按键位置的动作。

-  🍏 左手按shift，右手按9键，这样按出英文的括号。之前都是交给右手单独完成的，由于两个按键位置较远，难以很好定位。

-  🧅 之前很难按出括号，知乎搜索一番，找到了个***逆天*** 的办法：
“说个装B的打法，左手按住ALT，右手在小数字出键入40，然后再ALT+41就ok啦，如果是ALT+65那就是A，背诵几个ascii码就可以啦，点ALT+121245吧。” ---[如何快速便捷地打小括号？ - weizhengwei的回答 - 知乎]( https://www.zhihu.com/question/24885686/answer/29348850)

-  🥣 右上角的【】、=-[]{}()这些都比较难按，而且按标准指法按的话容易找不回之前的fj位置。有人想出个解决办法：[教你快速打出左角括号、右角括号「」（直角括号）_JankingWon的博客-CSDN博客_左角括号](https://blog.csdn.net/jankingmeaning/article/details/106494987)
----------
### 补充
关于！@#￥%……&（）——+这些符号怎么更高效地打出来，这个文章也许有点帮助([如何让键盘不按shift就能输出~!@#$这样的符号符号? - 知乎 (zhihu.com)](https://www.zhihu.com/question/23512679))
