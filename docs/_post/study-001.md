---
date: 2022-11-18
title: 第一天 Blender操作 | 大帅老猿threejs特训
category: study
cover: /mdImages/016.webp
tags:
  - Blender
  - threejs
---

# 前言
这一天主要是基础理论的学习。

本人学习资料仓库
-  https://gitee.com/zhang_dezheng_hsr/three-demo.git
-  [YCY-TrainingCamp-S2: 在原有的文件上添加本人的学习记录](https://gitee.com/zhang_dezheng_hsr/ycy-training-camp-s2)

# 一、大纲

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5e5aee5ebd0e43ad9efe4f810b49fdb9~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e5c26f9c31c543efa3d49135c321b91a~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/530de5ef42c94d8d80aacda54aae51d9~tplv-k3u1fbpfcp-watermark.image?)

# 二、THREE 基础概念

![drop-donuts-singleE05.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4b66da3034854ceea7de14d986fc900e~tplv-k3u1fbpfcp-watermark.image?)
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/bf37f56b246a4dad9e30ac418a20a8e7~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7759658ed0d7451a8afe8343bdae2e50~tplv-k3u1fbpfcp-watermark.image?)

透视相机模拟人眼的视角，通常用的比较多。正交相机，远近一样，没有近小远大的感觉。
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/024f123c1c6a4f1cbf3f8ec3cbf12d07~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/54366cd2ee0e426197879b2afd62244c~tplv-k3u1fbpfcp-watermark.image?)
环境光给一点就行，给太多不真实。
方向光，阴影太暗时补光，
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/266b4d721cc6408e8113bff0a601a0ba~tplv-k3u1fbpfcp-watermark.image?)
漫反射，基础颜色，如给苹果加红色。
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b5b6c219d3c64e19abc2c8cf8c5edd36~tplv-k3u1fbpfcp-watermark.image?)

# 三、THREE API
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1773f6cbe3764856b4077750a2313f8e~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/97594a2bb8124075a73df9dd4557de02~tplv-k3u1fbpfcp-watermark.image?)

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/77c8976de45a48e78f6a2066c5d65bea~tplv-k3u1fbpfcp-watermark.image?)


![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/050c447b3c244226b1934c9cd8973fbd~tplv-k3u1fbpfcp-watermark.image?)

一般用左边的，右边的会浪费空间
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5fd218e57b814b7284672b914c9af80f~tplv-k3u1fbpfcp-watermark.image?)

# 四、获取模型

glTF格式，blender是目前3D软件唯一可导入导出该格式的软件。
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ad706e60e42a4904b28e308a033b8c76~tplv-k3u1fbpfcp-watermark.image?)

# 五、Blender 快捷键

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/22f12dfdb0544a089c9dc7b8bed95004~tplv-k3u1fbpfcp-watermark.image?)

# 六、Blender 初体验

导入甜甜圈文件，记得选择gltf格式，

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ed099d7c91b14e0c836b073e418cf586~tplv-k3u1fbpfcp-watermark.image?)
由于模型尺寸过大，要稍微移动下，就看不到后面的部分，因此，需进行缩小操作。

缩放后，需ctrl + a 选择`全部变换`进行应用，以免缩放比例对后面操作的影响。

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c509ef572d54566a7ef117f569cdb75~tplv-k3u1fbpfcp-watermark.image?)

点击物体，选中了物体，这时左上角的`物体模式`就可以去切换为`编辑模式`【tab】.

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0747de2a690344619bc41531f18773b1~tplv-k3u1fbpfcp-watermark.image?)

分离选中项，可拆分出部分模型。利用此操作可以把上图组合选中的面包拆分成单个，如下图的操作。

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/afe8e0878e5f4f78bb469ce2d71c427e~tplv-k3u1fbpfcp-watermark.image?)

如下图，发现每一次只能拆出一小部分，多次重复操作，就能拆出一个完整的面包！！
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e13a31d56ff747c29e69cbe8cfd41326~tplv-k3u1fbpfcp-watermark.image?)

# 模拟甜甜圈从空中掉落到托盘的过程

分别给每个甜甜圈加`刚体`

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/529bfa859d8d4759af5d8cabd31f9e98~tplv-k3u1fbpfcp-watermark.image?)

给托盘加`刚体`，设置`被动`
![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/130fb15b0405483891bd0660f53f7501~tplv-k3u1fbpfcp-watermark.image?)

效果如下

![drop-donuts.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d7a52f8dffb463b9810781bf825e3eb~tplv-k3u1fbpfcp-watermark.image?)

烘焙到关键帧

![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e93262ddd3e2434a93a491b42de931b3~tplv-k3u1fbpfcp-watermark.image?)

导出为win10可识别的glb格式，打开预览

![drop-donuts-singleE01.gif](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62bbb8dcd3ac4e498f47eab414ae1b89~tplv-k3u1fbpfcp-watermark.image?)

# 七、操作说明

编辑模式下，可切换点线面，ctrl + 点击选中，可以实现点线面的多选。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f1964591e9694b879561281097b65af9~tplv-k3u1fbpfcp-watermark.image?)

按键 `/` 可以独立操作物体

![drop-donuts-singleE.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1867b37b8a644fd917deefb751f7daa~tplv-k3u1fbpfcp-watermark.image?)

# 八、开始使用我们前面创建的面包动画

不懂的属性查文件，文档写的很清楚
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/adade45a7f46422384146936a23095af~tplv-k3u1fbpfcp-watermark.image?)

按照前文知识，我的代码如下
```
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 10)
// camera.position.set(0,0,2) 放开后即可看到绿色的正方体

// 渲染器 WebGL1Renderer
const renderer = new THREE.WebGL1Renderer({ 
  // 抗锯齿
  antialias: true
})
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

//  创建环境光，让所有东西都亮起来
const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
scene.add(ambientLight)

// 物体  创建立方体：长宽高均为 1
const boxGeometry = new THREE.BoxGeometry(1, 1, 1)

// 材质  MeshBasicMaterial:基础材质
const boxMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00})

const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial)
scene.add(boxMesh)

// 帧循环
function animation() {
  requestAnimationFrame(animation)
  renderer.render(scene, camera)
}

// 动画入口
animation()
```
此时眼前一黑，啥也看不见。

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c08ed9d7d7784dd292d11182e7f7b800~tplv-k3u1fbpfcp-watermark.image?)

## 补充知识
下面我创建面片`plane`, 这里存在`背面剔除`的3d学知识点，如下图所示

![drop-donuts-singleE02.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/10ac4848b4204c93b0a0171efbbe127d~tplv-k3u1fbpfcp-watermark.image?)

让我们进入透视相机的视角【此处为右手坐标系】

![drop-donuts-singleE03.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/879d8153dc4744c289a1980a42ba689d~tplv-k3u1fbpfcp-watermark.image?)

回到前面，“眼前一黑”是因为没设置相机位置，前文的代码里我加了这个注释，放开后就可看到正方体了

![drop-donuts-singleE04.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d1eb67a7936a41fa94ffe56289a1197d~tplv-k3u1fbpfcp-watermark.image?)

加控制器，就可以用鼠标控制物体
```
const controls = new OrbitControls(camera, renderer.domElement)
```

![drop-donuts-singleE05.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/d5c555b6130a45b19767056e0ea523d2~tplv-k3u1fbpfcp-watermark.image?)

## 导入donuts.glb

使用`THREE.AnimationMixer`创建动画混合器，让所有动画共享该混合器，遍历执行，记得要在真循环里面执行该混合器的更新` mixer?.update(0.02)【0.02是必要的，没数值，它不知道隔多久更新】`，就可以让动画动起来了。现在默认是循环播放，优化一下，设置播放一次，停在最后一帧。代码如下

```
  // 当场景中的多个对象独立动画时，每个对象都可以使用同一个动画混合器。
  mixer = new THREE.AnimationMixer(gltf.scene)
  // play each animation
  const clips = gltf.animations 

  clips.forEach(clip => {
    const action = mixer.clipAction(clip)
    // 只播放一次
    action.loop = THREE.LoopOnce
    action.play()
    // 动画停在最后一帧
    action.clampWhenFinished = true
  })
```

```
function animation() {
  requestAnimationFrame(animation)
  renderer.render(scene, camera)
  controls.update()
  // 0.02 必须填否则没有数据
  mixer?.update(0.02)
}
```
效果如下

![drop-donuts-singleE06.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5d6380c923eb4a689c349dc6f546de9e~tplv-k3u1fbpfcp-watermark.image?)

加下背景色、旋转，完结撒花！

![drop-donuts-singleE08.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/e6cf431bfe9d4b5a8133bde060fde804~tplv-k3u1fbpfcp-watermark.image?)