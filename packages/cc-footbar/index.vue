<template>
  <div class="version">
    <CMD v-for="(item, index) in commands" :data="item" :key="index"></CMD>
    <div class="placeHolder" :style="{ color: tipColor }">{{ tips }}</div>
    <div class="value" v-if="verString.length">version: {{ verString }}</div>
    <i @click.stop.prevent="onClickNotify" @dblclick.stop.prevent="" @mousedown.stop.prevent="" class="notify iconfont icon_notify"></i>
    <div v-show="showErrorPanel" class="error-panel">
      <div class="title">
        <div class="text">{{ errorTitle }}</div>
        <i class="iconfont icon_close close" @click="onCloseError"></i>
      </div>
      <div class="content ccui-scrollbar" :style="{ color: errorColor || 'red' }">{{ errorContent }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, watch } from 'vue';
import { FootBarMsg, FootCmd, TipOptions, ErrorOptions, TipsArrayOptions } from './const';
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
    const showErrorPanel = ref(false);
    const tipColor = ref<string>('');
    const errorColor = ref<string>('');
    const verString = ref(props.version || '');
    const tips = ref('');
    let timer: number | null = null;
    const doTips = (msg: string, opts: TipOptions) => {
      clearTimeout(tipsArrayTimer);
      tipsArrayTimer = null;
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
    let currentErrorOptions: ErrorOptions = {};
    const doError = (msg: string, options: ErrorOptions) => {
      showErrorPanel.value = true;
      currentErrorOptions = options;
      errorTitle.value = options.title || 'Error';
      errorContent.value = msg;
      errorColor.value = options.color || 'red';
    };
    let tipsArrayTimer: any = null;

    const doTipsArray = (options: TipsArrayOptions) => {
      clearTimeout(tipsArrayTimer);
      tipsArrayTimer = null;
      const tips = options.tips || [];
      const interval = options.interval || 2;
      const offset = options.offset || 3;
      if (tips.length === 0) {
        return;
      }
      //
      let idx = 0;
      function loopTips() {
        if (tips.length === 0) {
          return;
        }
        if (idx >= tips.length) {
          idx = 0;
        }
        const tip = tips[idx++];
        ccui.footbar.showTips(tip, { duration: -1 });
        const time = interval + Math.random() * offset;
        tipsArrayTimer = setTimeout(loopTips, time * 1000);
      }
      loopTips();
    };
    onMounted(() => {
      ccui.Emitter.on(FootBarMsg.TipsArray, doTipsArray);
      ccui.Emitter.on(FootBarMsg.Tips, doTips);
      ccui.Emitter.on(FootBarMsg.RegCmd, regCmd);
      ccui.Emitter.on(FootBarMsg.Error, doError);
    });
    onUnmounted(() => {
      ccui.Emitter.off(FootBarMsg.TipsArray, doTipsArray);
      ccui.Emitter.off(FootBarMsg.Tips, doTips);
      ccui.Emitter.off(FootBarMsg.RegCmd, regCmd);
      ccui.Emitter.off(FootBarMsg.Error, doError);
    });
    watch(
      () => props.version,
      (v) => {
        verString.value = v;
      }
    );
    const errorTitle = ref('');
    const errorContent = ref('');
    return {
      errorColor,
      errorTitle,
      errorContent,
      showErrorPanel,
      verString,
      tips,
      tipColor,
      commands,
      onClickNotify() {
        showErrorPanel.value = !showErrorPanel.value;
      },
      onCloseError() {
        if (currentErrorOptions.resetWhenClose) {
          errorContent.value = '';
          errorTitle.value = 'Error';
        }
        showErrorPanel.value = false;
      },
    };
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
  align-items: center;

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
    line-height: 14px;
    display: flex;
    align-items: center;
  }
  .notify {
    position: relative;
    cursor: pointer;
    overflow: visible;
    padding: 0 5px;
    &:hover {
      background-color: rgb(201, 201, 201);
    }
  }
  .error-panel {
    overflow: hidden;
    border: #393939 1px solid;
    border-radius: 3px;
    position: absolute;
    right: 5px;
    bottom: 25px;
    width: 200px;
    height: 100px;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.5);
    color: aliceblue;
    display: flex;
    flex-direction: column;
    .title {
      font-size: 15px;
      display: flex;
      flex-direction: row;
      align-items: center;
      user-select: none;
      padding: 0 3px;
      overflow: hidden;
      background: rgb(43, 48, 56);
      .text {
        flex: 1;
        overflow: hidden;
        user-select: none;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-right: 5px;
      }
      .close {
        font-size: 12px;
        cursor: pointer;
        &:hover {
          color: rgb(100, 100, 100);
        }
      }
    }
    .content {
      font-size: 13px;
      display: flex;
      padding: 3px;
      flex: 1;
      word-break: break-all;
      background: rgb(33, 37, 43);
      overflow-y: scroll;
      overflow-x: hidden;
    }
  }
}
</style>
