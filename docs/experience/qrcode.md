
实际开发中使用qrcode做二维码时，我发现基本用不到它的其它属性。所以可以索性封装起来。

利用qrcode库的clear和makeCode api 实现组件复用。当二维码传的值改变时，该组件能跟着更新code。不需要再new 一个 qrcode。用户只需要传code就行。

同时添加size属性，允许用户修改px大小。代码如下
```
<template>
  <div ref="code"></div>
</template>

<script>
import QRCode from 'qrcodejs2';

export default {
  props: {
    code: {
      type: [String, Number],
      default: 'test'
    },
    size: {
      type: [String, Number],
      default: 60
    }
  },
  data() {
    return {
      qrcode: null
    };
  },
  watch: {
    code: {
      handler(val) {
        setTimeout(() => {
          if (this.$refs.code) {
            if (this.qrcode) {
              this.qrcode.clear(); // 清除二维码
              this.qrcode.makeCode(val);
              return;
            }
            this.qrcode = new QRCode(this.$refs.code, {
              text: val,
              width: +this.size,
              height: +this.size
            });
          }
        }, 100);
      },
      immediate: true
    }
  }
};
</script>

```