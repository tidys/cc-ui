<template>
  <div class="version">
    <img v-if="!!hintKey" class="hint" title="今日/总计" :src="hintUrl" @click="onViewHistroy" />
    <CMD v-for="(item, index) in commands" :data="item" :key="index"></CMD>
    <div class="placeHolder" :style="{ color: tipColor }">{{ tips }}</div>
    <div class="divider"></div>
    <div class="value" v-if="verString.length">
      <div class="label">version: {{ verString }}</div>
    </div>
    <i @click.stop.prevent="onClickNotify" @dblclick.stop.prevent="" @mousedown.stop.prevent="" class="notify iconfont icon_notify"></i>
    <div v-show="showErrorPanel" class="error-panel" ref="elErrorPanel">
      <div class="resize-left">
        <div class="line">
          <div class="top" @mousedown="onMouseDownLeftTop"></div>
          <div class="bottom" @mousedown="onMouseDownLeft"></div>
        </div>
      </div>
      <div class="panel">
        <div class="resize-top" @mousedown="onMouseDownTop">
          <div class="line-top"></div>
        </div>
        <div class="title">
          <div class="text">{{ errorTitle }}</div>
          <i class="iconfont icon_close close" @click="onCloseError"></i>
        </div>
        <pre class="content ccui-scrollbar" :style="{ color: errorColor || 'red' }">{{ errorContent }}</pre>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref, toRaw, watch } from 'vue';
import { FootBarMsg, FootCmd, TipOptions, ErrorOptions, TipsArrayOptions } from './const';
import CMD from './cmd.vue';
import ccui from '../index';
import { uiElement } from '../element';
export default defineComponent({
  name: 'cc-footbar',
  components: { CMD },
  props: {
    version: {
      type: String,
      default: '',
    },
    /**
     * 访问计数的统计服务，如果为空字符串，则不使用
     */
    hintKey: {
      type: String,
      default: '',
    },
  },
  setup(props, ctx) {
    const hintUrl = ref(`https://api.visitorbadge.io/api/combined?path=${props.hintKey}&countColor=%23555555&style=flat-square&labelStyle=none`);
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
    const cleanCmd = (footCmd: FootCmd | undefined) => {
      if (footCmd) {
        const index = commands.value.findIndex((item) => item.label === footCmd.label);
        if (index !== -1) {
          commands.value.splice(index, 1);
        }
      } else {
        commands.value.length = 0;
      }
    };
    onMounted(() => {
      ccui.Emitter.on(FootBarMsg.TipsArray, doTipsArray);
      ccui.Emitter.on(FootBarMsg.Tips, doTips);
      ccui.Emitter.on(FootBarMsg.RegCmd, regCmd);
      ccui.Emitter.on(FootBarMsg.Error, doError);
      ccui.Emitter.on(FootBarMsg.CleanCmd, cleanCmd);
    });
    onUnmounted(() => {
      ccui.Emitter.off(FootBarMsg.TipsArray, doTipsArray);
      ccui.Emitter.off(FootBarMsg.Tips, doTips);
      ccui.Emitter.off(FootBarMsg.RegCmd, regCmd);
      ccui.Emitter.off(FootBarMsg.Error, doError);
      ccui.Emitter.off(FootBarMsg.CleanCmd, cleanCmd);
    });
    watch(
      () => props.version,
      (v) => {
        verString.value = v;
      }
    );
    const errorTitle = ref('');
    const errorContent = ref('');
    const elErrorPanel = ref<HTMLDivElement>();
    const doc = uiElement.getDoc();
    return {
      onViewHistroy() {
        const key = toRaw(props.hintKey);
        if (key) {
          window.open(`https://visitorbadge.io/status?path=${key}`);
        }
      },
      hintUrl,
      errorColor,
      elErrorPanel,
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
      onMouseDownLeftTop(event: MouseEvent) {
        event.stopPropagation();
        if (!elErrorPanel.value) {
          return;
        }
        const disX = event.pageX;
        const width = elErrorPanel.value.clientWidth;
        const disY = event.pageY;
        const height = elErrorPanel.value.clientHeight;
        function onMouseMove(e: MouseEvent) {
          const newWidth = width - (e.pageX - disX);
          elErrorPanel.value!.style.width = `${newWidth}px`;
          const newHeight = height - (e.pageY - disY);
          elErrorPanel.value!.style.height = `${newHeight}px`;
        }
        function onMouseDown() {
          doc.removeEventListener('mousemove', onMouseMove);
          doc.removeEventListener('mouseup', onMouseDown);
        }
        doc.addEventListener('mousemove', onMouseMove);
        doc.addEventListener('mouseup', onMouseDown);
      },
      onMouseDownLeft(event: MouseEvent) {
        event.stopPropagation();
        if (!elErrorPanel.value) {
          return;
        }

        const disX = event.pageX;
        const width = elErrorPanel.value.clientWidth;
        function onMouseMove(e: MouseEvent) {
          const newWidth = width - (e.pageX - disX);
          elErrorPanel.value!.style.width = `${newWidth}px`;
        }
        function onMouseDown() {
          doc.removeEventListener('mousemove', onMouseMove);
          doc.removeEventListener('mouseup', onMouseDown);
        }
        doc.addEventListener('mousemove', onMouseMove);
        doc.addEventListener('mouseup', onMouseDown);
      },
      onMouseDownTop(event: MouseEvent) {
        event.stopPropagation();
        if (!elErrorPanel.value) {
          return;
        }
        const disY = event.pageY;
        const height = elErrorPanel.value.clientHeight;

        function onMouseMove(e: MouseEvent) {
          const newHeight = height - (e.pageY - disY);
          elErrorPanel.value!.style.height = `${newHeight}px`;
        }
        function onMouseDown() {
          doc.removeEventListener('mousemove', onMouseMove);
          doc.removeEventListener('mouseup', onMouseDown);
        }
        doc.addEventListener('mousemove', onMouseMove);
        doc.addEventListener('mouseup', onMouseDown);
      },
    };
  },
});
</script>
<style lang="less" scoped>
@blockwidth: 5px;
@blockcolor: transparent;
.version {
  overflow: hidden;
  border: 1px solid #393939;
  width: 100%;
  height: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  .hint {
    min-width: 91px;
    height: 20px;
    cursor: pointer;
  }
  .placeHolder {
    flex: 1;
    overflow: hidden;
    margin-left: 10px;
    word-break: break-all;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgb(218, 218, 218);
    font-size: 14px;
    line-height: 14px;
  }
  .divider {
    width: 1px;
    height: 100%;
    margin: 0 5px;
    background-color: #393939;
  }
  .value {
    overflow: hidden;
    margin-right: 10px;
    color: rgb(255, 255, 143);
    font-size: 14px;
    line-height: 14px;
    display: flex;
    align-items: center;
    .label {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
  .notify {
    position: relative;
    cursor: pointer;
    overflow: visible;
    padding: 0 5px;
    &:hover {
      color: rgb(201, 201, 201);
    }
    &:active {
      color: rgb(255, 162, 0);
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
    overflow: hidden;
    flex-direction: row;
    .resize-left {
      width: 0;
      background-color: aqua;
      cursor: ew-resize;
      position: relative;
      .line {
        position: absolute;
        top: 0;
        bottom: 0;
        width: @blockwidth;
        position: absolute;
        display: flex;
        flex-direction: column;
        .top {
          cursor: nwse-resize;
          display: flex;
          height: @blockwidth;
          width: @blockwidth;
          &:hover {
            background-color: @blockcolor;
          }
        }
        .bottom {
          flex: 1;
          &:hover {
            background-color: @blockcolor;
          }
        }
      }
    }
    .panel {
      flex: 1;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      .resize-top {
        cursor: ns-resize;
        height: 0;
        position: relative;
        .line-top {
          position: absolute;
          left: @blockwidth;
          right: 20px;
          height: @blockwidth;
          &:hover {
            background-color: @blockcolor;
          }
        }
      }
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
        white-space: pre-wrap;
        font-size: 13px;
        display: flex;
        padding: 3px;
        margin: 0;
        flex: 1;
        word-break: break-all;
        background: rgb(33, 37, 43);
        overflow-y: scroll;
        overflow-x: hidden;
      }
    }
  }
}
</style>
