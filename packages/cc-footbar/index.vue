<template>
  <div class="version">
    <div class="placeHolder">{{ tips }}</div>
    <div class="value" v-if="verString.length">version: {{ verString }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { FootBarMsg } from './const';
import ccui from '../index';
export default defineComponent({
  name: 'cc-footbar',
  props: {
    version: {
      type: String,
      default: ''
    }
  },
  setup(props, ctx) {
    const verString = ref(props.version || '');
    const tips = ref('000000000000000000000000000000000000000000');
    let timer: number | null = null;
    const doTips = (msg: string) => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }
      tips.value = msg;
      timer = setTimeout(() => {
        timer = null;
        // tips.value = '';
      }, 2 * 1000);
    };
    onMounted(() => {
      ccui.Emitter.on(FootBarMsg.Tips, doTips);
    });
    onUnmounted(() => {
      ccui.Emitter.off(FootBarMsg.Tips, doTips);
    });
    watch(
      () => props.version,
      v => {
        verString.value = v;
      }
    );
    return { verString, tips };
  }
});
</script>
<style lang="less" scoped>
.version {
  overflow: hidden;
  border: 1px solid #393939;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;

  .placeHolder {
    flex: 1;
    overflow: hidden;
    margin-left: 10px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(218, 218, 218);
    font-size: 14px;
  }
  .value {
    margin-right: 10px;
    color: rgb(255, 255, 143);
    font-size: 14px;
  }
}
</style>
