<template>
  <div class="btn" ref="text" @click.stop.prevent="onClick" :style="{ background: `${theme.background}` }" @mouseup="onMouseup" @mousedown="onMousedown" @mouseenter="onMouseenter" @mouseleave="onMouseleave" :class="{ click: isClick }">
    <div v-show="isShowTips && tooltip" ref="tips" class="tips">
      <div class="label">{{ tooltip }}</div>
      <div ref="arrow" data-popper-arrow class="arrow"></div>
    </div>
    <div class="text" :class="{ gray: isDisabled }">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive, watch, toRaw } from 'vue';
import { createPopper } from '@popperjs/core';
import chroma from 'chroma-js';

export default defineComponent({
  name: 'CCButton',
  props: {
    color: {
      type: String,
      default: '#4e4e4e',
    },
    tooltip: {
      type: String,
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['confirm'],
  setup(props: any, { emit }) {
    const isClick = ref(false);
    const isHover = ref(false);
    const isDisabled = ref(props.disabled);
    const isShowTips = ref(false);
    const tips = ref<HTMLDivElement>();
    watch(
      () => props.disabled,
      () => {
        isDisabled.value = props.disabled;
        updateColor();
      }
    );
    let timer: any = null;
    let popperInstance: any = null;
    function showTipsFunc(target: any) {
      if (props.tooltip && tips.value) {
        isShowTips.value = true;
        popperInstance = createPopper(target, tips.value, {
          placement: 'top-start',
          modifiers: [
            {
              name: 'arrow',
              options: {
                element: arrow.value,
                padding: 6, // popper带有圆角时，不希望箭头移动到圆角
              },
            },
            {
              name: 'offset',
              options: {
                offset: [5, 5],
              },
            },
          ],
        });
      }
    }
    function calcColor() {
      if (isDisabled.value) {
        return '#969696';
      }
      return toRaw(props.color);
    }
    function updateColor() {
      theme.value.background = hexColor = calcColor();
    }
    const arrow = ref<HTMLElement>();
    const text = ref<HTMLElement>();
    const theme = ref({ background: '' });
    let hexColor = calcColor();
    updateColor();
    return {
      isDisabled,
      arrow,
      text,
      tips,
      isShowTips,
      theme,
      isClick,
      onHover(event: any) {},
      onMouseup() {
        if (isDisabled.value) {
          return;
        }
        isClick.value = false;
        theme.value.background = hexColor;
      },
      onMousedown() {
        if (isDisabled.value) {
          return;
        }
        isClick.value = true;
        theme.value.background = chroma(hexColor).darken(0.5).hex();
      },
      onClick() {
        if (isDisabled.value) {
          return;
        }
        emit('confirm');
      },
      onMouseenter() {
        if (props.tooltip) {
          clearTimeout(timer);
          timer = setTimeout(() => {
            showTipsFunc(text.value);
          }, 600);
        }
        isHover.value = true;
        theme.value.background = chroma(hexColor).brighten(0.3).hex();
      },
      onMouseleave() {
        if (props.tooltip) {
          clearTimeout(timer);
          isShowTips.value = false;
          popperInstance?.destroy();
          popperInstance = null;
        }
        isHover.value = false;
        theme.value.background = hexColor;
      },
    };
  },
});
</script>

<style scoped lang="less">
.gray {
  filter: grayscale(100%);
  cursor: no-drop !important;
}
.btn {
  box-sizing: border-box;
  min-width: 10px;
  height: 26px;
  border: 1px solid #171717;
  border-radius: 5px;
  font-family: -apple-system;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0 1px;
  cursor: pointer;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  .tips {
    .label {
      background-color: #666666;
      border-radius: 6px;
      user-select: none;
      padding: 3px 9px;
      max-width: 200px;
      word-break: break-all;
    }

    .arrow {
      z-index: -1;

      &:before {
        display: block;
        content: '';
        transform: rotate(45deg);
        background-color: #666666;
        width: 10px;
        height: 10px;
      }
    }
  }

  .tips[data-popper-placement^='top'] {
    .arrow {
      bottom: -5px;
    }
  }

  .tips[data-popper-placement^='bottom'] {
    .arrow {
      top: -5px;
    }
  }

  .tips[data-popper-placement^='left'] {
    .arrow {
      right: -5px;
    }
  }

  .tips[data-popper-placement^='right'] {
    .arrow {
      left: -5px;
    }
  }
  .text {
    margin: 0 12px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    user-select: none;
    color: white;
    font: 12px bold;
    // display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
}

.click {
  border-color: #fd942b;
}
</style>
