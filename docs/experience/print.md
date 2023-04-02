首先，打印肯定可以直接window.print()就能打印，这没什么好讲，所以，在这里我探讨的是如何实现定制化的表。

有以下几个方案。

# 一 第三方插件
使用第三方插件，vxe-table，是个十分成熟的表库，使用高级表`<vxe-grid v-bind='data'/>`能实现诸多效果，特别很多参数支持函数，增强定制化的能力，merge-cells、cell-styles、header-styles；此外还有单选、多选，可以跨行选中。


![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/961e45899a544ee890b7dc99a1863474~tplv-k3u1fbpfcp-watermark.image?)

直接用表时，有个问题，就是边框线比表内部的线细。用cell-styles可以实现表之间、表的边框的线粗细一致。原理是利用columnIndex、rowIndex二者是否为0，划分为四种情况，刚好返回4种样式。就完美达成了效果。

## vxe-table 直接设置cell-styles
直接设置cell-styles的border，将会发现，表中间的线很粗，四边的线很细，代码如下

```
    gridHeadOptionsTable1(item) {
      const isShowWeight = this.isShowWeight(item);
      let data = [
        { col1: '99', col2: '', col5: '44', col6: '' },
        { col1: '33', col2: '', col3: '77', col4: '', col5: '111', col6: '' }
      ];
      return {
        showHeader: false,
        minHeight: '100',
        align: 'center',
        // cellStyle: this.resetTableCenterBorder(),
        cellStyle: {
          'background-color': 'white',
          'border-collapse': 'collapse',
          'border-color': 'black',
          'background-image': 'none',
          'font-size': '17px',
          'font-weight': 600,
          border: '1px solid black',
          color: 'black',
          padding: '3px 10px'
        },
        columns: [
          { field: 'col1', align: 'left', showOverflow: false, width: '10%' },
          { field: 'col2', align: 'left', showOverflow: false, width: '25%' },
          { field: 'col3', align: 'left', showOverflow: false, width: '10%' },
          { field: 'col4', align: 'left', showOverflow: false, width: '25%' },
          { field: 'col5', align: 'left', showOverflow: false, width: '10%' },
          { field: 'col6', align: 'left', showOverflow: false, width: '20%' }
        ],
        data,
        mergeCells: [
          { row: 0, col: 1, rowspan: 1, colspan: 3 }
        ]
      };
    },
```
效果
![image.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1d1a46eeca3b4efb8606980ec8d685a7~tplv-k3u1fbpfcp-watermark.image?)

按照前文所述思路，使用resetTableCenterBorder函数后，就没这个问题了，
```
<vxe-grid v-bind="{cellStyle: resetTableCenterBorder()}" />

// 实现表内部与外部线-粗细一致
    resetTableCenterBorder(obj = {}, callback) {
      const _obj = {
        'background-color': 'white',
        'border-collapse': 'collapse',
        'border-color': 'black',
        'background-image': 'none',
        'font-size': '17px',
        'font-weight': 600,
        color: 'black',
        padding: '3px 10px',
        ...obj
      };
      return ({ rowIndex, columnIndex }) => {
        let changeObject = {};
        if (!rowIndex && !columnIndex) {
          changeObject = {
            border: '1px solid black',
            ..._obj
          };
        }
        if (!rowIndex && columnIndex) {
          changeObject = {
            'border-top': '1px solid black',
            'border-right': '1px solid black',
            'border-bottom': '1px solid black',
            ..._obj
          };
        }
        if (rowIndex && !columnIndex) {
          changeObject = {
            'border-left': '1px solid black',
            'border-right': '1px solid black',
            'border-bottom': '1px solid black',
            ..._obj
          };
        }
        if (rowIndex && columnIndex) {
          changeObject = {
            'border-right': '1px solid black',
            'border-bottom': '1px solid black',
            ..._obj
          };
        }
        callback && callback(changeObject, rowIndex, columnIndex);
        return changeObject;
      };
    }
```
![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/88f0b3ae01c049ea8f435195f2bf61a2~tplv-k3u1fbpfcp-watermark.image?)

## 使用html的table相关标签

添加以下代码，释放table的可编程能力
```
#html-table {
  table-layout: fixed;
  word-break: break-all;
  word-wrap: break-word; //表格固定布局
}
```
通常我会直接写一下大体的样式，先规范table的样式，方便后面修改
```
#html-table {
  table-layout: fixed;
  word-break: break-all;
  word-wrap: break-word; //表格固定布局
  text-align:center;
  font-weight: 600;
  th, td {
    padding: 6px;
  }
  th {
    height: 50px;
  }
}
```
使用html自带的table相关标签的好处是可以实现复杂表，如嵌套表、动态列数量。th嵌套div标签就能实现下文中提到的表头斜线。

## 其它第三方库：el-table

# 二 div 模拟表
使用div写表，用border模拟单元格边框。可以定制化表。缺点在于，复杂表时，跨行会让样式错乱，具体表现当使用flex布局配合word-break：all在border模拟的边框竖线无法与上下行对齐，当使用百分比的宽度时，也能实现，当要求动态列时，这个方法有一定的局限，必须要每次计算好列的百分比。

关键属性：

box-sizing:content-box

flex-shrink:0

width: 20%; 使用百分比时，内容不会撑开，flex布局会。

border

# 三 使用table标签
2023-03-23，最近几天的需求就是在做打印的一个表，table是我的第三个方案，他不存在上述div的问题。近乎完美的方案。表内定制部分，直接写个标签包裹住就行了，不用管border；没有跨行问题。

# 四 拓展
## 如何实现表头第一个单元格内的反斜杠，该单元格填两个值，一个左下，一个右上。

![image.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/045a8145107f4ee7a68947e88cb1fa0c~tplv-k3u1fbpfcp-watermark.image?)

代码实现
```

<th style="overflow:hidden" colspan="2">
  <div class="first-col">
    <div class="first-col-top">名字</div>
    <div class="first-col-bottom">骨龄</div>
  </div>
</th>

// 表头斜线
.first-col {
  position: relative;
  height: 20px;
}
.first-col:before {
  content: "";
  position: absolute;
  left: -15px;
  // left: -30px;
  top: 10px;
  width: 300px;
  height: 1px;
  transform: rotate(18deg);
  background-color: black;
}
.first-col .first-col-top {
  position: absolute;
  right: 4px;
  top: -10px;
}
.first-col .first-col-bottom {
  position: absolute;
  left: 4px;
  bottom: -10px;
}
```

利用伪类画斜线，单元格overflow：hidden，溢出隐藏。两个文字的位置是定位实现的。斜线倾斜角度需要慢慢调。
## 浏览器的打印界面对web网页有缩放效果
有时候并不是写了多少像素，打印出来就是多少像素。预览的效果跟body下直接子元素的宽度有关。

实际开发中，我用谷歌浏览器测试效果。如果是A4，我会将宽度设置为1000px；如果是A5，则设置700px。这是开发经验。

## 打印页眉页脚 1/9 [共九页，当前在第一页]的实现

## 二维码/条形码
有时用户会有这种需求，需要扫描二维码/条形码。二维码每次用的时候都要new一下，而且当二维码的数据变化，不会动态去刷新二维码，所以我二次封装了二维码组件，见`开发经验-qrcode二次封装`，而条形码没有这种问题，barcode，当code变化能更新条形码，就很人性化。