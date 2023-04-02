2022-11-18
> Blender 学习笔记
# 前言
最近看了b站up`小郑还挺忙`的视频，觉得cool呆了，突然就想学一下里面提到的Blender。下面是跟着B站up`blendergo`的教程的学习记录。

# 一、快捷键
移动 g

旋转 r 【rotate】

缩放 s 【scale】

变换是上面三个的组合 t 【transform】

缩放x轴 s x 【3版本可能会失效，这个bug有up给官方提过，简单重启下也是没问题。另外，也可以在blender找到任意一个输入文字的地方，获得鼠标聚焦后切换为美式键盘即可。[解决blender 3.0beta版本快捷键失灵的方法_哔哩哔哩_bilibili](https://www.bilibili.com/video/BV1GR4y1b7pv/?spm_id_from=333.880.my_history.page.click&vd_source=9aab42de6453d89ff2a1518cbe145ee3)】

缩放y轴 s y

缩放z轴 s z

框选快捷键 b

游标 空格

shift a 添加物体 【`会在游标所在位置进行添加`】

x 删除物体

按住鼠标中键，可以旋转物体

按住鼠标中键+shift键，可以平移物体

~ 可以快速前物体各个视图，如前视图、后视图等。

a 全选物体

# 二、萌三兄弟

正式开始前，先做一下设置。把下面的勾选上。

默认移动
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/03fa3834fc2240068747b49d2e72448a~tplv-k3u1fbpfcp-watermark.image?)

显示边缘线，同时设置0.6

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/281bcca6f4ac462da620f9929ab3593d~tplv-k3u1fbpfcp-watermark.image?)

下面是我们要建模的图

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/40ad18bc203f47c8925eb91999015ed8~tplv-k3u1fbpfcp-watermark.image?)

新建一个立方体，添加修改器，添加倒角

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2b754eee24dc4804b59b70aa2b6b1d15~tplv-k3u1fbpfcp-watermark.image?)

 调整数量与段数

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/a0b3607e8acf4201bac9364b9b77e6b3~tplv-k3u1fbpfcp-watermark.image?)

腿也进行上面一样的操作，但是，得ctrl + a 选择缩放进行应用。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2e8af3bd4d684003a1323e4917a419e1~tplv-k3u1fbpfcp-watermark.image?)

按shift + d，复制物体。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/3b7f95539cd546e0b060b60df456287a~tplv-k3u1fbpfcp-watermark.image?)

按住g + x ，就能在x轴移动了。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fec2afe403a24a45a575f4aa23307085~tplv-k3u1fbpfcp-watermark.image?)

PS：
如果不知道沿着x轴还是y轴，可以看一下右上角

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2c261f0397284b208d709f39a52ad3ef~tplv-k3u1fbpfcp-watermark.image?)

shift + 右键 可以把游标放到物体表面！！！！！

r + x 【怎么旋转，看右上角】+ 90 ，表示沿着x轴方向旋转90度。


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/eddaef04986847029b75fd9bc8515781~tplv-k3u1fbpfcp-watermark.image?)
做好眼睛、嘴巴后，来做眼皮

点击 / 进入隔离模式。单独处理眼睛

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b2a3012936f49f0beef3c1dac508088~tplv-k3u1fbpfcp-watermark.image?)

进入编辑模式

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/45b2c810f3aa4689b361cbdf4836eff7~tplv-k3u1fbpfcp-watermark.image?)

如图，对应快捷键1、2、3。在移动键下，鼠标点击到底部的点

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/525358c6285c4f959ffbd920794d013c~tplv-k3u1fbpfcp-watermark.image?)

点击 衰减编辑 【g+滚轮上下可以控制衰减范围的大小】
    
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b3c806ec86024a1a8ccdff82cb76b2d6~tplv-k3u1fbpfcp-watermark.image?)

做完眼皮，调整下大小就行。然后做眼珠，同样是球，但是这个球是前后比较扁的。往右边移动一点，按r 可以沿着当前平面旋转，按r + r 可以自由旋转【`s + s 同理`】果如下图

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d9aaaa5ffe6e4699a93dc942ba0d3d5a~tplv-k3u1fbpfcp-watermark.image?)

这时候，按shift+鼠标坐标左键点击眼球和眼皮，这样就把眼球、眼皮、眼珠都选中，再复制一份，按g + x 水平移动，调整水平位置即可。

之后就是复制创建一个中间的小人。如下图，其中，眼睛要选中各自的圆点，方便多选时可以同时调整，另外，可以alt + r各个轴的旋转重置为。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d038502b29354be1a946909559910678~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7193df8a47fc438e8ccf5c351fdcdf10~tplv-k3u1fbpfcp-watermark.image?)

至此，完成了基本的建模。

到建模中后期，可以就能去掉棱角了，这需要进行两个步骤

其一，添加表面 修改器

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96f55156aab640c5b2d0e720952d52cb~tplv-k3u1fbpfcp-watermark.image?)
其二，将 平直着色 改成 平滑着色 【物体模式下鼠标右键就能看到下图面板】

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/99c1ece449234e7a8759107830a1348e~tplv-k3u1fbpfcp-watermark.image?)

我们还需要将小人们分组，新建一个集合，再选中其中一个小人，按 m 键，选择丢进对应的分组就行。【`按 m 键也可以直接建立集合`】

此时新建平面，按 tab 进入编辑模式。

添加平面，进入编辑模式，挤出，退出编辑，进入物体模式，加倒角，加平滑着色。

添加摄像机，调整摄像机位置。

按住快捷键n召唤设置，

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/18decee159af483da4b39adecf469771~tplv-k3u1fbpfcp-watermark.image?)

选中 锁定摄像机到视图方位。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b62914ead2cd403eb92ad7064f91ccda~tplv-k3u1fbpfcp-watermark.image?)


添加材质

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19c3eefe5c994fa292ff7aff911aae75~tplv-k3u1fbpfcp-watermark.image?)

隐藏掉摄像机、灯。然后点击渲染生成图像，保存。完结撒花！！