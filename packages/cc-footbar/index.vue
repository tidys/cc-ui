<template>
  <div class="version">
    <CMD v-for="(item, index) in commands" :data="item" :key="index"></CMD>
    <div class="placeHolder" :style="{ color: tipColor }">{{ tips }}</div>
    <div class="value" v-if="verString.length">version: {{ verString }}</div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { FootBarMsg, FootCmd, TipOptions } from './const';
import CMD from './cmd.vue';
import ccui from '../index';
export default defineComponent({
  name: 'cc-footbar',
  components: { CMD },
  props: {
    version: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const tipColor = ref<string>('');
    const verString = ref(props.version || '');
    const tips = ref('');
    let timer: number | null = null;
    const doTips = (msg: string, opts: TipOptions) => {
      if (timer !== null) {
        clearTimeout(timer);
        timer = null;
      }

      const { duration } = opts;
      tipColor.value = opts.color || '';
      if (duration && duration <= 0) {
        tips.value = msg;
      } else {
        tips.value = msg;
        timer = setTimeout(() => {
          timer = null;
          tips.value = '';
        }, duration || 2 * 1000);
      }
    };
    const commands = ref<FootCmd[]>([]);
    function regCmd(footCmd: FootCmd) {
      commands.value.push(footCmd);
    }
    onMounted(() => {
      ccui.Emitter.on(FootBarMsg.Tips, doTips);
      ccui.Emitter.on(FootBarMsg.RegCmd, regCmd);
    });
    onUnmounted(() => {
      ccui.Emitter.off(FootBarMsg.Tips, doTips);
      ccui.Emitter.off(FootBarMsg.RegCmd, regCmd);
    });
    watch(
      () => props.version,
      (v) => {
        verString.value = v;
      }
    );
    return { verString, tips, tipColor, commands };
  },
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
    display: flex;
    align-items: center;
    margin-left: 10px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(218, 218, 218);
    font-size: 14px;
    line-height: 14px;
  }

  .value {
    margin-right: 10px;
    color: rgb(255, 255, 143);
    font-size: 14px;
  }
}
</style>
