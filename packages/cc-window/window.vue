<template>
  <div class="ui-window" ref="windowEl" tabindex="0">
    <div class="header" @mousedown.self="onMousedown">
      <div class="icon"></div>
      <div class="title">{{ (data && data.title) || 'window' }}</div>
      <div class="iconfont icon_close close" @click="onWinClose"></div>
    </div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, PropType, provide, ref } from 'vue';
import { ProvideKey, UiWindowOptions } from './index';
import { intervalValue } from '../cc-dialog/util';
import { uiElement } from '../element';

export default defineComponent({
  name: 'cc-window',
  emits: ['close'],
  props: {
    data: {
      type: Object as PropType<UiWindowOptions>,
    },
  },

  setup(props, { emit }) {
    const windowEl = ref();

    function onWinClose() {
      const { closeCB } = props.data as UiWindowOptions;
      if (closeCB) {
        closeCB();
      }
      emit('close');
    }

    provide(ProvideKey.CloseWindow, onWinClose);
    provide(ProvideKey.ResponseCB, (data: any) => {
      const { responseCB } = props.data as UiWindowOptions;
      if (responseCB) {
        responseCB(data);
      }
    });
    onMounted(() => {});
    onUnmounted(() => {});

    function updateWindow() {
      if (props.data) {
        let windowElement: HTMLDivElement = windowEl.value as HTMLDivElement;
        if (Object.prototype.hasOwnProperty.call(props.data, 'width')) {
          windowElement.style.width = `${props.data.width}px`;
        }
        if (Object.prototype.hasOwnProperty.call(props.data, 'height')) {
          windowElement.style.height = `${props.data.height}px`;
        }
      }
    }

    onMounted(() => {
      updateWindow();
      (windowEl.value as HTMLElement).focus();
    });
    const doc = uiElement.getDoc();
    function onMousedown(event: MouseEvent) {
      const disX = event.pageX - windowEl.value.offsetLeft;
      const disY = event.pageY - windowEl.value.offsetTop;

      function onDocMouseMove(e: MouseEvent) {
        const winWidth = windowEl.value.clientWidth;
        const winHeight = windowEl.value.clientHeight;
        const docWidth = doc.body.clientWidth;
        const docHeight = doc.body.clientHeight;
        let x = e.pageX - disX;
        x = intervalValue(x, 0, docWidth - winWidth);

        let y = e.pageY - disY;
        y = intervalValue(y, 0, docHeight - winHeight);
        windowEl.value.style.left = `${x}px`;
        windowEl.value.style.top = `${y}px`;
      }
      function onDocMouseUp() {
        doc.removeEventListener('mousemove', onDocMouseMove);
        doc.removeEventListener('mouseup', onDocMouseUp);
      }
      doc.addEventListener('mousemove', onDocMouseMove);
      doc.addEventListener('mouseup', onDocMouseUp);
    }

    return {
      windowEl,
      onWinClose,
      onMousedown,
    };
  },
});
</script>

<style scoped lang="less">
.ui-window {
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(111, 111, 111);
  border-radius: 4px;
  background-color: rgb(165, 165, 165);

  .content {
    flex: 1;
    display: flex;
    overflow: hidden;
  }

  .header {
    background-color: #2c2c2c;
    display: flex;
    flex-direction: row;

    .icon {
      width: 10px;
    }

    .title {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: white;
      font: 15px bold;
      flex: 1;
      text-align: center;
      user-select: none;
      pointer-events: none;
    }

    .close {
      color: rgb(196, 196, 196);
      user-select: none;
      display: flex;
      align-items: center;
      margin: 0 5px;
      cursor: pointer;
    }
  }
}
</style>
