这部分是同事的代码。

实现文字滚动效果是利用了transform的translateX属性，加个定时器，调整好时间，每隔一定时间向右移动一段距离，就能实现滚动效果.

如何判断是否滚动呢？利用overflow：hidden，判断文字的长度有无溢出行宽，进而得以判断。 

我多加了一段代码 `:key="_=> new Date()" `。由于组件复用的原因，一个页面多次引用时，mounted，只执行一次，第二次复用时，不再走mounted函数，就无法在第二次复用时正确判断是否需要滚动。举个例子，v-for的数组被重新赋值，就会有复用情况。使用了key就能强制加载一遍该组件。

```
<template>
  <div ref="scroll-wrap" :key="_=> new Date()" class="scroll-wrap">
    <div ref="scroll" class="scroll">{{ value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Number, String],
      default: ''
    }
  },
  data() {
    return {
      isReverse: false,
      timer: null,
      gapTimer: null
    };
  },
  mounted() {
    this.setScroll();
  },
  beforeDestroy() {
    clearInterval(this.timer);
    clearTimeout(this.gapTimer);
  },
  methods: {
    setScroll() {
      const scroll = this.$refs.scroll;
      const scrollWidth = scroll.scrollWidth;
      const clientWidth = scroll.clientWidth;
      const scrollLength = scrollWidth - clientWidth;
      let curLength = 0;
      this.timer = setInterval(() => {
        if (curLength <= scrollLength) {
          curLength += 0.5;
        }
        if (curLength >= scrollLength) {
          this.gapTimer = setTimeout(() => {
            curLength = 0;
          }, 1000);
        }
        scroll.style.transform = `translateX(-${curLength}px)`;
      }, 25);
    }
  }
};
</script>

<style scoped lang="scss">
.scroll-wrap {
  width: 100%;
  overflow: hidden;
  .scroll {
    width: 100%;
    transform: translateX(0);
  }
}
</style>
```

效果如下

![动画.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/648e654442c34379a894b29d857fc4fd~tplv-k3u1fbpfcp-watermark.image?)

由于overflow：hidden，flex布局下文字不会撑开盒子，故在flex布局也能正常使用，如下实例
```
<template>
  <div>
    <div class="scroll">
      <div class="scroll-item">
        <ScrollText
          text="4444444444444444444444444444444444444444444"
        />
      </div>
      <div class="scroll-item">
        <ScrollText
          text="888"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    ScrollText: () => import('./scrollText/index')
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
.scroll {
  display: flex;
  width: 200px;
  margin-left: 50px;
  margin-top: 50px;
  .scroll-item {
    flex: 1;
    &:nth-child(1) {
        margin-right: 20px;
    }
  }
}
</style>

```

![002.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/00f9eec50181473db617f2ce2dc75be6~tplv-k3u1fbpfcp-watermark.image?)

进一步的优化方案是，不使用key，而是使用通过监听value的变化去重新执行`setScroll`，如此vue进行dom的diff时可以复用之前的节点。这个思路有点像我二次封装的qrcode。