---
date: 2022-06-02
title: echart踩坑记录(一)
category: screen
cover: /mdImages/011.webp
tags:
  - vue
  - screen project
  - echart
---

社区案例 https://www.makeapie.cn/echarts

# ehart 横向柱形图的右侧模拟滚动条同时滚动条初始状态位于顶部

# 最大值、最小值、平均值

```
<div style="width: 600px;height:400px"></div>
  <script>
    // init方法有两个参数, 第一个参数代表是一个dom节点, 第二个参数, 代表你需要使用哪一套主题
    // 默认内置了两套主题 , light  dark
    var mCharts = echarts.init(document.querySelector("div"), 'dark')
    var xDataArr = ['张三', '李四', '王五', '闰土', '小明', '茅台', '二妞', '大强']
    var yDataArr = [88, 92, 63, 77, 94, 80, 72, 86]
    var option = {
      xAxis: {
        type: 'category',
        data: xDataArr
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: yDataArr,
          markPoint: {
            data: [
              {
                type: 'max', name: '最大值'
              },
              {
                type: 'min', name: '最小值'
              }
            ]
          },
          markLine: {
            data: [
              {
                type: 'average', name: '平均值'
              }
            ]
          },
          label: {
            show: true,
            rotate: 60
          },
          barWidth: '30%'
        }
      ]
    };
    mCharts.setOption(option)
  </script>
```
![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0888a893799341d48d25fa6d97594aee~tplv-k3u1fbpfcp-watermark.image?)

