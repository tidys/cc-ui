<template>
  <div class="process" :style="getBgStyle()" ref="bgElement">
    <div class="content" :style="getContentStyle()"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref, toRaw } from 'vue';
export default defineComponent({
  name: 'process',
  props: {
    percent: {
      type: Number,
      default: 0,
    },
    size: {
      type: Number,
      default: 10,
    },
    color: {
      type: String,
      default: '#999',
    },
    bgColor: {
      type: String,
      default: '#fff',
    },
  },
  setup(props) {
    const bgElement = ref<HTMLElement>();
    return {
      bgElement,
      getBgStyle() {
        const ret: string[] = [];
        if (props.bgColor) {
          ret.push(`background-color:${props.bgColor}`);
        }
        ret.push(`height:${props.size}px`);
        ret.push(`border-radius:${props.size / 2}px`);
        return ret.join(';');
      },
      getContentStyle() {
        const ret: string[] = [];
        if (props.color) {
          ret.push(`background-color:${props.color}`);
        }
        if (bgElement.value) {
          const total = bgElement.value.getBoundingClientRect().width;
          console.log(total);
          const currentWidth = (props.percent / 100) * total;
          ret.push(`width:${currentWidth}px`);
        }
        ret.push(`height:${props.size}px`);
        ret.push(`border-radius:${props.size / 2}px`);
        return ret.join(';');
      },
    };
  },
});
</script>
<style lang="less" scoped>
.process {
  width: 100%;
  box-sizing: border-box;
  .content {
    box-sizing: border-box;
  }
}
</style>
